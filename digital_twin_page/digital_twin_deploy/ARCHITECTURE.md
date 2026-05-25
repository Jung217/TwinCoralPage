# Coral Reef Digital Twin — 架構說明

靜態網頁形式的概念展示平台，把現場調查取得的 3D Gaussian Splatting 珊瑚礁模型、
colony 分類資訊與模擬環境感測資料整合成一頁互動式 dashboard。

`web.md` 是最初規格、`index.html` 是主整合頁、`environment.html` 是 M2 階段獨立的環境儀表板。

---

## 1. 技術棧

| 領域 | 套件/工具 | 版本 / 來源 | 用途 |
|---|---|---|---|
| 渲染 3D Gaussian Splatting | `@sparkjsdev/spark` | 2.0.0（jsDelivr CDN） | SplatMesh 是 THREE.Object3D，SparkRenderer 掛在 scene，原生支援 raycaster.intersectObject |
| 3D 基礎庫 | `three` | 0.180.0（jsDelivr CDN） | importmap 提供，OrbitControls 來自 three/addons |
| PLY → SOG 轉檔 | `@playcanvas/splat-transform` | 2.2.0（CLI） | 把 201 MB PLY 壓成 8-15 MB `.sog`（內部 PCSOGSZIP zip），同時 normalize SH 順序 |
| 圖表 | `chart.js` 4.4.1 + `chartjs-adapter-date-fns` | CDN | 環境指標的 24h/7d/30d 趨勢圖 |
| 樣式 | Tailwind CSS（runtime CDN） | CDN script | 整頁 design token、layout、dark theme |
| 字體 | Inter | Google Fonts | UI 文字 |
| 靜態 server | Python `ThreadingHTTPServer` | `_serve.py` | 本機開發，多執行緒避免大 PLY 卡住其他 request |
| 資料前處理 | Python 3 + `plyfile`, `scipy`, `numpy` | 本地裝 | colony 分析、PLY bbox 萃取 |
| 自動化測試 | Playwright (Chromium) | npm devDep | 開發 debug 用，模擬點擊、抓 console、截圖 |

頁面是純靜態（HTML + JS + JSON），沒有後端，可部署到任何 static host。

---

## 2. 檔案結構

```
digital_twin_webpage/
├── index.html              ← 主整合頁（含 3D viewer + colony panel + 環境區）
├── environment.html        ← M2 階段獨立環境儀表板（不依賴 3D 模型）
├── test.html               ← M1 階段資料 sanity check
├── minimal_viewer.html     ← debug 用，最簡 GaussianSplats3D 載 PLY
├── web.md                  ← 原始需求/規格
├── ARCHITECTURE.md         ← 本文件
│
├── generate_demo_data.py   ← 產生 environment_data.json（30 天歷史 + current）
├── rebuild_colonies.py     ← 從新 PLY 重算 colonies.json（M4 對位用）
├── _inspect_ply_bounds.py  ← parse PLY 抽 splat 真實 bbox
├── _export_scene_bounds.py ← 把上面結果輸出 scene_bounds.json
├── _serve.py               ← ThreadingHTTPServer，附 cache-busting header
│
├── environment_data.json   ← 模擬感測資料（current + history_24h + history_30d）
│
└── assets/
    ├── coral_main_2.sog       ← 14.5 MB, PCSOGSZIP, 網頁實際載入這個 (Phase 1 轉檔結果)
    ├── coral_instances_2.sog  ← 8.6 MB, PCSOGSZIP, Colony color mode 用
    ├── coral_main.ply         ← 原始自然色 (201 MB, INRIA 標準格式, Python pipeline 用)
    ├── coral_main_2.ply       ← SuperSplat 調過視角的 PLY (201 MB, 轉 SOG 來源)
    ├── coral_instances.ply    ← 原始 instance 染色版 (201 MB)
    ├── coral_instances_2.ply  ← SuperSplat 同步調過的 instance 染色版
    ├── colonies.json          ← 38 colonies 元資料（centroid/bbox/class/metrics）
    └── scene_bounds.json      ← 每個 PLY 的真實 bbox + robust percentile bbox
```

源頭 PLY（未複製進 webpage）位於：
`D:\chun\chun\analysis\coral_video\brush_work\exports\` （由 Brush GS training 產出，
phase 1-4 pipeline 計算 colonies）。

---

## 3. 資料流

```
                        ┌───────────────────────┐
                        │ GoPro 影片 + COLMAP   │
                        └───────────┬───────────┘
                                    ↓
                  ┌────────────────────────────────┐
                  │ Brush GS training (30k iter)   │
                  │   → coral_30000_fixed.ply      │
                  └─────────────┬──────────────────┘
                                ↓
        ┌───────────────────────┴──────────────────────────┐
        │ phase 3 (instance seg) → coral_instances.ply     │
        │ phase 3 (labeled)      → coral_labeled_v3.ply    │
        │ phase 4 (metrics)      → colonies_enriched.json  │
        └───────────────────────┬──────────────────────────┘
                                ↓
              ┌─────────────────────────────────┐
              │ SuperSplat（手動調整視角）       │
              │  position (20,-5,-20) +         │
              │  rotation (180,0,10) +          │
              │  scale 1.2                       │
              │  → coral_main_2.ply              │
              │  → coral_instances_2.ply         │
              └─────────────────┬───────────────┘
                                ↓
              ┌─────────────────────────────────┐
              │ rebuild_colonies.py             │
              │  讀 coral_labeled_v3 的         │
              │  per-splat instance_id +        │
              │  coral_main_2 的 xyz            │
              │  → 新 colonies.json (對位後)    │
              └─────────────────┬───────────────┘
                                ↓
              ┌─────────────────────────────────┐
              │ _export_scene_bounds.py         │
              │  parse 每個 PLY 真實 xyz 範圍   │
              │  → scene_bounds.json            │
              └─────────────────┬───────────────┘
                                ↓
                         assets/ → 網頁載入
```

**SuperSplat 套用的 transform 已 bake 進 splat 座標**（PLY header 跟原始一樣，
但 x/y/z column 已被改變）。client 端不再做任何 rotation 補償。

**Splat 順序在 SuperSplat 內被保留**（用 `rebuild_colonies.py` 第一段 sanity check
驗證：原始 PLY 跟轉換後 PLY 任兩 splat 距離 ratio 全部 = 1.2000，標準差 0），
所以 `coral_labeled_v3.ply` 的 per-splat `instance_id` 跟 `coral_main_2.ply`
的 per-splat xyz 可以直接 index-by-index 對應。

---

## 4. 頁面結構（`index.html`）

```
┌───────────────────────────────────────────────────────────────────────┐
│ Header  CR · Coral Reef Digital Twin Platform [Demo Data] · Site · ↻ │
├──────────────────────────────────────┬────────────────────────────────┤
│                                       │ ┌────────────────────────────┐│
│                                       │ │ Colony Information         ││
│                                       │ │   class / id / metrics     ││
│                                       │ │   Growth History (T0 預留) ││
│                                       │ │   [View in 3D] [Clear]     ││
│  3D GS viewer                         │ └────────────────────────────┘│
│  ┌─ tool bar ─┐                       │ ┌────────────────────────────┐│
│  Natural | Colony color | Reset | □   │ │ Environmental Monitoring   ││
│                                       │ │   4 readings (SST/pH/Sal/  ││
│   <splats>                            │ │     DO) + 2x2 trend charts ││
│                                       │ │   24h / 7d / 30d toggle    ││
│  Controls (▼ collapsible)             │ │   30s live jitter           ││
│  ┌─ kbd shortcuts ─┐                  │ │   ⚙ alert settings (modal) ││
│  └──────────────────┘                  │ └────────────────────────────┘│
├──────────────────────────────────────┴────────────────────────────────┤
│ SURVEY TIMELINE   ● T0 · 2026-05 (Current)  ─────  ○ T1 · Planned     │
├───────────────────────────────────────────────────────────────────────┤
│ Footer · Demo disclaimer (環境資料為模擬，3D 模型來自 T0 真實調查)        │
└───────────────────────────────────────────────────────────────────────┘
```

**佈局**：CSS grid `grid-cols-12`，左邊 viewer `lg:col-span-7 / xl:col-span-8`，
右邊 panel 跟環境區用 `flex-col flex-1`。整頁 `body { overflow: hidden }` 限定
單頁面不滾動，內部 panels 才有自己的 `overflow: auto`。

---

## 5. 3D viewer

### 載入與 fit
```
init3D()
  ├─ computeSceneBounds()         ← 讀 scene_bounds.json 的 robust_center/extent
  │                                  （2%-98% percentile，避開 outlier splat
  │                                   把 raw bbox 拉到 90+ units 變超遠）
  ├─ new GaussianSplats3D.Viewer({ cameraUp: [0,-1,0], ... })
  ├─ viewer.addSplatScene('./assets/coral_main_2.ply', { ... })
  ├─ viewer.start()
  ├─ fitCameraToScene()           ← 用 robust_center + extent 算斜上方 r=0.7
  ├─ STATE.initialCameraPos/Tgt   ← snapshot 給 Reset view 用
  ├─ buildBboxOverlay()           ← 38 個 THREE.Box3 + Box3Helper，預設全 hidden
  └─ installPickListeners()        ← 掛 pointer/mouse + capture phase + window 後備
```

### Mode 切換
```js
MODE_CONFIG = {
  natural:   { ply: 'coral_main_2.ply',      label: 'Natural' },
  instances: { ply: 'coral_instances_2.ply', label: 'Colony color' },
}
```
切換時 `viewer.removeSplatScene(0)` → `viewer.addSplatScene(new)`，splat 數一樣，bbox
不變所以 colonies.json 對位仍正確。bbox helper 沒有「Bbox mode」按鈕，只在 picking 時
顯示「被選中那一個」當視覺確認；Debug bbox 勾選可一次顯示全 38 個給調 picking 用。

### Picking
1. **Pass 1**：`THREE.Raycaster.ray.intersectBox` 跑遍 38 個 Box3，取最近命中。
2. **Pass 2 (fallback)**：Pass 1 沒命中時把每個 colony centroid 投影到 NDC
   → 螢幕座標，找 100 px 內最近的；250 px 外算 no hit。
3. 點到 → `showColony(c)` 填 panel + `flyToColony(c)` 動畫飛 close-up。

### flyToColony 視角策略
```
direction = (colony_center - scene_center).normalize()
direction.y -= 0.35   // 混入 -Y 軸偏移（mkkellogg cameraUp=-Y → 視覺上方）
direction.normalize()
camera_pos = colony_center + direction × r
target     = colony_center
r          = max(colony_max_size × 2.5, 3.5)
```
這個方向確保 camera 站在「scene 外側」看回 colony，視線方向不會穿過其他 colony。
動畫 700 ms ease-in-out-quad。

### Reset view
按鈕 / `R` 鍵 → animateCameraTo(`initialCameraPos`, `initialCameraTgt`)，
同時 `clearColony()` 取消選取。

---

## 6. mkkellogg viewer 已知 quirks（**歷史記錄**，Phase 2 後不再適用）

> **2026-05-18 後**: viewer 已換成 Spark.js + SOG 載入。下列 quirks (a)(b)(d)(e)(f)(g)
> 從架構面消除；(c) 改用 `camera.up=[0,-1,0]` 在 Three.js 標準 PerspectiveCamera 上
> 處理，沒有 viewer-level hack。本節保留作為踩雷紀錄與「為何要重構」的脈絡參考。

### (a) `gpuAcceleratedSort` + `sharedMemoryForWorkers:false` 不相容
GPU sort 需要 SharedArrayBuffer 把結果寫回 CPU，但 SharedArrayBuffer 需要
COOP/COEP cross-origin isolation header（一般 `python -m http.server` 沒提供）。
若同時設兩個會導致 `splatMesh.geometry.instanceCount` **永遠是 0**，畫面全黑
但**沒有任何 error**。**修法**：viewer options 只保留最少設定，移除所有
`gpuAcceleratedSort`/`enableSIMDInSort`/`integerBasedSort`/`halfPrecisionCovariancesOnGPU`。

### (b) PLY 額外 properties 會讓 parser 解析錯位
Brush 原本的 `coral_labeled_v3.ply` 在標準 INRIA 53 個 properties 之後又加了
`class_id`/`class_conf`/`instance_id`（共 7 bytes/splat）。mkkellogg parser 不認得
這幾個欄位 → 解析時每個 splat 多讀 7 bytes 全部錯位 → splat 位置變 garbage
（看不到任何東西）。**修法**：用 `coral_30000_fixed.ply`（純標準 INRIA 格式）當主視覺
PLY，那些 metadata 只在 Python 端 parse 用。

### (c) PLY 座標系慣例
- Brush 匯出時 header 注解 `Vertical axis: y`，但其實是 **-Y up**（OpenCV/COLMAP 慣例）。
- mkkellogg 預設也是 -Y up（與 INRIA 3DGS 論文一致）。
- **SuperSplat** 是 **+Y up**（PlayCanvas/OpenGL 慣例）。
- 同一份 PLY 在 mkkellogg / SuperSplat 兩邊看起來剛好上下顛倒。
- **修法**：在 `index.html` 內設 `cameraUp: [0, -1, 0]`，配合 camera Y 在 target 下方
  （`cy - radius * 0.7`），畫面方向會跟 SuperSplat 內看到的一致。

### (d) 內建 `onMouseClick` 會篡改 `controls.target`
點擊 canvas 時 mkkellogg 內部 click handler 會把 `controls.target` 改到
「ray 反方向遠處」的點，導致下一幀 sort distance 算錯、
`instanceCount` 從 893,901 砍到 0~幾百，畫面變空。
**修法**：在 `onPickClick` 入口先 snapshot 當前 camera/target，立即啟動 `flyToColony`
動畫——動畫每幀 lerp 都會用 snapshot 覆寫 mkkellogg 篡改的值。

### (e) 點擊事件 raw `click` 在拖動時不會 fire
OrbitControls 對最微小的 mouse 移動都當 drag 開始旋轉。Browser 偵測到 mousedown
→ mouseup 之間距離超過 ~4 px 就**不 fire `click` 事件**，導致 picking handler 從未呼叫。
**修法**：用 `pointerdown`/`pointerup`（外加 `mousedown`/`mouseup`、加 capture phase、
加 window 後備）自己組 click，閾值 `dx<8 && dy<8 && dt<800ms` 視為點擊。

### (f) Brush PLY 的 `f_rest_*` properties 是 **alphabetical** 排序
（`f_rest_0, f_rest_1, f_rest_10, f_rest_11, ..., f_rest_2, f_rest_20, ...`），
不是 INRIA spec 預期的 numerical 排序。所以 SH degree > 0 時顏色會錯。
**修法**：`sphericalHarmonicsDegree: 0` 只用 `f_dc`（base color）。要修正顏色得寫
Python script 重新排序 properties 或在 SuperSplat 內 bake。

### (g) Splat 視覺光暈延伸超出 bbox
每個 splat 是 3D Gaussian kernel，alpha 衰減慢，視覺輪廓比 bbox 大很多。Picking
若只用 `intersectBox` 容易因為「點到光暈但不在 bbox 內」而 miss 掉。**修法**：
Pass 2 screen-space 最近 centroid fallback（見 picking section）。

---

## 7. 環境模擬資料

### 產生方式
`generate_demo_data.py` 用固定 seed（42）產生：
- `current`：當下讀數（4 個指標）
- `history_24h`：145 點，每 10 分鐘
- `history_30d`：721 點，每小時
- `rain_events_30d`：30 天內 2-4 場降雨（影響鹽度）

每個指標的模擬公式：
```
SST  = 26.5 + (28.0 - 26.5) × (30-days_ago)/30   ← 30 天緩慢上升
     + 0.5 × cos((hour - 14)/24 × 2π)             ← 日週期，下午峰值
     + Gauss(0, 0.08)                              ← 隨機 noise
pH   = 8.1 + 0.05 × daily_cycle + Gauss(0, 0.015)
Sal  = 35.0 - 0.6 × rain_effect + Gauss(0, 0.04)  ← 降雨拉低
DO   = 6.5 + 0.6 × daily_cycle + Gauss(0, 0.08)   ← 白天光合作用峰值
```

### 視覺化
- 4 個讀數卡片：當前值，每 30 秒做 ±0.1 的 random walk 模擬即時感測
- 4 個 mini chart（Chart.js）：對應指標的 30 天時序
- 24h/7d/30d toggle：切時間範圍（24h 用 `history_24h`、7d 取 `history_30d` 後 168 點）
- SST 圖在 29°C 處紅色虛線「Bleaching warning threshold」，≥28.5°C 的點顯紅色 dot

---

## 8. 互動 / 快捷鍵

| 操作 | 行為 |
|---|---|
| 點 splat | 選取最近 colony + 動畫飛 close-up |
| 拖動（>8 px） | OrbitControls 旋轉 |
| Wheel | Zoom |
| Right-drag | Pan |
| `F` | Re-fit camera（用當前 PLY 的 robust bbox 重算） |
| `R` | Reset view（飛回 initial snapshot + 取消選取） |
| `Esc` | Clear selection（不動 camera） |
| Header 齒輪 | 開「Custom alerts coming soon」modal（預留） |
| Timeline T1 | 開「Future survey not yet conducted」modal（預留） |
| Debug bbox 勾選 | 顯示全部 38 個 colony bbox wireframe（調試用） |

---

## 9. State 結構

```js
STATE = {
  // 環境
  envData         // environment_data.json
  current         // { sst, ph, sal, do, t }
  range           // '24h' | '7d' | '30d'
  charts          // { sst, ph, sal, do } → Chart.js instances

  // 3D
  viewer          // GaussianSplats3D.Viewer
  sceneBounds     // scene_bounds.json
  colonies        // colonies.json
  currentMode     // 'natural' | 'instances'
  currentPly      // 當前 PLY filename
  initialCameraPos / initialCameraTgt   // Reset view 用
  bboxGroup       // THREE.Group (parent of 38 helpers)
  bboxItems       // [{ colony, box: THREE.Box3, helper: THREE.Box3Helper }]
  debugBbox       // bool，是否顯示全部 38 helper
  selectedColonyId
  modeSwitching   // 避免重複切換
}
```
全部掛在 `window.STATE` 給 dev console / playwright 直接 inspect 用。

---

## 10. Demo 標註

依 `web.md` 要求，所有顯示模擬資料的地方都明確標註：
- 頁面標題 `[Demo Data]` 橘色 badge
- 環境區標題 `(Simulated)` 灰色小字
- 每個讀數卡片右上 `demo` 灰色小 tag
- Footer 完整 disclaimer：「Environmental sensor data shown is simulated for
  demonstration. 3D coral model and colony classifications are derived from real
  field survey data (T0: 2026-05). Sensor integration is planned.」

---

## 11. 未來功能預留（disabled state）

- **Timeline T1 marker**：可點，跳出「Future survey not yet conducted」
- **Growth History 區塊**（colony panel 內）：顯示「No previous data (T0 baseline)」
- **Alert settings**（環境區齒輪）：點開「Feature coming soon: set custom alert thresholds」
- **真實感測器整合**：目前環境資料全模擬，footer 已聲明 sensor integration 規劃中

---

## 12. 部署注意（M5 待做）

- ~~PLY 檔 ≈ 201 MB × 2 = 超過 Vercel 免費 plan 單檔 100 MB 上限~~ ← **Phase 1 已解**
- 現在實際上線檔案：
  - `coral_main_2.sog` 14.5 MB
  - `coral_instances_2.sog` 8.6 MB
  - 兩者合計 23 MB，遠低於 Vercel 100 MB 單檔限制
- 原 PLY (4×201 MB) 不需上傳 — Python pipeline 在本地跑後產出 colonies.json 即可
- 建議 `.gitignore` 加 `assets/*.ply` 避免不小心 commit 大檔

## 13. Migration history

- **2026-05-18**:
  - **Phase 1**: PLY → SOG（splat-transform v2.2.0），檔案 201 MB → 8-15 MB，~14× 壓縮率
  - **Phase 2**: mkkellogg/gaussian-splats-3d 0.4.5 → @sparkjsdev/spark 2.0.0
    - viewer 換成標準 Three.js WebGLRenderer + SparkRenderer + SplatMesh
    - 自管 OrbitControls（取代 mkkellogg 內建 controls 跟它的 onMouseClick 篡改）
    - Picking 升級為三段式：bbox → splat native raycast → screen-space fallback
    - SH degree 3 重啟用（SOG 已 normalize property 順序，舊 quirk (f) 已解）
    - 第六節列 7 個 mkkellogg quirks 中 6 個從架構面消除

- **2026-05-19**:
  - **Hover instance highlight (Route A)**: 取代 bbox wireframe 選取視覺化，改為
    「滑鼠 hover 到 colony 時，該 colony 的 splat 區域用 instance 染色 overlay 亮起」。
    - 兩個 SplatMesh 疊加: coral_main_2 (natural) 永遠顯示, coral_instances_2 用 SplatEdit
      + SplatEditSdf(BOX, invert=true, opacity=0, blendMode=MULTIPLY) 裁切到 hover colony 的 bbox
    - `coral_instances_2.sog` 改為 **lazy load** (首次 pointerenter canvas 才載入, ~1.5s)
    - 弱裝置 (mobile UA / hardwareConcurrency<4 / deviceMemory<4) 自動 fallback:
      不載 overlay, 只用 cursor:pointer + DOM tooltip
    - FPS 量測: idle 60, hover sweep avg 59.7 (jitter <1 fps on RTX 3060 Laptop)
    - 視覺**近似**做法 — bbox 邊緣可能漏染少數 splat;未來可升級到「per-splat instance_id LUT
      texture + dyno modifier」(Route C) 達 splat 級精準度
