# Coral Reef Digital Twin — 部屬包

珊瑚礁 Digital Twin Demo Platform 的可部屬版本。整合 3D Gaussian Splatting
珊瑚礁模型、colony 分類資訊與模擬環境感測資料的單頁互動 dashboard。

純靜態網頁（HTML + JavaScript + JSON），**無後端**，可部屬到任何能提供靜態檔的伺服器。

---

## 1. Requirements

### 部屬伺服器端

| 項目 | 需求 | 說明 |
|---|---|---|
| 靜態檔伺服器 | 任一 (Python / Nginx / Apache / Caddy / Vercel / Netlify / GitHub Pages …) | 只需能提供靜態檔 + 正確 MIME |
| 磁碟空間 | ~25 MB | 主要是兩個 `.sog` 模型檔 (合計 ~23 MB) |
| 對外網路 | **必須能訪問 CDN** | `cdn.jsdelivr.net`、`cdn.tailwindcss.com`、`fonts.googleapis.com`、`fonts.gstatic.com`。若部屬到內網離線環境，需自行下載對應 lib 並改 `index.html` 路徑 |
| Node.js (選用) | 18+ | 只有用 `server.js` 開發伺服器才需要。零依賴，純 Node 標準庫 |
| Python (選用) | 3.7+ | 只有想重跑 `generate_demo_data.py` 才需要 |

### 瀏覽器端（使用者）

| 項目 | 需求 |
|---|---|
| 瀏覽器 | 任何支援 **WebGL 2** 與 ES module / importmap 的現代瀏覽器（Chrome / Edge / Firefox 最近 2 年版本、Safari 16+） |
| GPU | 建議獨顯或近 2-3 年內整顯。手機/弱裝置會自動 fallback（不載 colony overlay） |
| 網路 | 首次載入 ~25 MB（主模型 + Chart.js + Three.js + Spark） |

> Spark.js 內部使用 SharedArrayBuffer。當前程式碼已避開需要 SAB 的設定，所以
> 不需要 COOP/COEP cross-origin isolation header；若未來啟用 `gpuAcceleratedSort`
> 才需要在伺服器加上對應 header。

---

## 2. 部屬方式

### 2.1 最快：本機快速 demo（Node.js 內建 server）

```bash
cd digital_twin_deploy
node server.js 8000
# 開瀏覽器 → http://localhost:8000/
```

`server.js` 是用 Node 標準庫 `http` 寫的 static file server，**零外部依賴**
（不用 `npm install`）。內建：

- 對 `.sog` / `.ply` / `.wasm` 等大檔自動回正確 MIME
- 強制 `Cache-Control: no-store` 避免開發時被瀏覽器快取騙到
- 非同步 stream pipe，多 client 並發或大檔下載中不會互卡
- path traversal 保護（拒絕越過 root 的請求）

Windows 下也可用倉庫根目錄的 `start_server.ps1` 在背景啟動（自動寫
log 到 `%LOCALAPPDATA%\digital_twin_server\`，重複執行不會起第二份）：

```powershell
powershell -ExecutionPolicy Bypass -File start_server.ps1
```

若手邊只有 Python 想臨時開個 server，也可：

```bash
python -m http.server 8000
```

但多 client 並發或大檔下載過程點別的連結時可能會排隊卡住，建議還是用
`server.js`。

### 2.2 Nginx（建議生產用）

把 `digital_twin_deploy` 整包丟到 `/var/www/coral-twin/`，新增 site config：

```nginx
server {
    listen 80;
    server_name coral.example.com;
    root /var/www/coral-twin;
    index index.html;

    # .sog 是 PCSOGSZIP（內部 zip），瀏覽器直接 fetch 二進位即可
    types {
        application/octet-stream sog;
    }

    # 模型檔大但已壓縮，瀏覽器可長期快取
    location ~* \.(sog)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.(json|html|js)$ {
        # 開發/迭代期間 no-cache；穩定後可拉長
        add_header Cache-Control "no-cache";
    }
}
```

重新載入：`nginx -s reload`

### 2.3 Apache (.htaccess)

```apache
AddType application/octet-stream .sog

<FilesMatch "\.sog$">
    Header set Cache-Control "public, max-age=2592000, immutable"
</FilesMatch>
```

### 2.4 Caddy（最簡）

```caddyfile
coral.example.com {
    root * /var/www/coral-twin
    file_server
    header /*.sog Cache-Control "public, max-age=2592000, immutable"
}
```

### 2.5 Vercel / Netlify / GitHub Pages

直接把整個資料夾 push 上去即可，**無建構步驟**。

- 兩個 `.sog` 合計 23 MB，遠低於 Vercel 單檔 100 MB 限制
- 不要把原始 `.ply` (各 201 MB) 包進來
- Vercel 可建 `vercel.json` 設 `headers` 給 `.sog` 加快取
- GitHub Pages 的單檔上限 100 MB 也夠用

### 2.6 進入頁面

部屬完成後：
- `/` 或 `/index.html` → 主整合頁（3D viewer + colony panel + 環境區）
- `/environment.html` → 純環境儀表板（不載 3D 模型，較輕量）

---

## 3. 檔案清單

```
digital_twin_deploy/
├── README.md                  ← 本文件
├── ARCHITECTURE.md            ← 完整技術架構說明（資料流、3D quirks、state 結構等）
│
├── index.html                 ← 主整合頁（3D viewer + colony panel + environment）
├── environment.html           ← 獨立環境儀表板（不依賴 3D 模型）
├── environment_data.json      ← 模擬感測資料（current + 24h + 30d 歷史）
│
├── server.js                  ← Node.js 靜態檔伺服器（零依賴），本機 / 小型部屬可用
├── generate_demo_data.py      ← (選用) 重新生成 environment_data.json
│
└── assets/
    ├── coral_main_2.sog       ← 14.5 MB, 主視覺 (Natural color) Gaussian Splat
    ├── coral_instances_2.sog  ← 8.6 MB, Colony color overlay（hover 高亮用）
    ├── colonies.json          ← 38 個 colony 元資料（centroid/bbox/class/metrics）
    └── scene_bounds.json      ← 每個 PLY 的真實 bbox + robust percentile bbox
```

> 原始 PLY（201 MB × 4 份）、開發用的 Playwright debug 腳本、SuperSplat 中間檔
> 都**沒有**複製到此包中，因為部屬不需要。若要重做資料生成 pipeline 請參考
> `ARCHITECTURE.md` 的「資料流」章節。

---

## 4. 網頁架構 (Architecture)

### 4.1 技術棧

| 領域 | 套件 | 版本 / 來源 |
|---|---|---|
| 3D Gaussian Splatting 渲染 | `@sparkjsdev/spark` | 2.0.0 (jsDelivr CDN) |
| 3D 基礎庫 | `three` | 0.180.0 (jsDelivr CDN) |
| 圖表 | `chart.js` + `chartjs-adapter-date-fns` | 4.4.1 (CDN) |
| 樣式 | Tailwind CSS | runtime CDN |
| 字體 | Inter | Google Fonts |

所有 JS / CSS 都從 public CDN 載入，**部屬端不需要 `npm install`**。

### 4.2 頁面佈局 (`index.html`)

```
┌─────────────────────────────────────────────────────────────────┐
│ Header  Coral Reef Digital Twin Platform [Demo Data] · Site · ↻ │
├──────────────────────────────────┬──────────────────────────────┤
│                                  │ ┌──────────────────────────┐ │
│                                  │ │ Colony Information       │ │
│                                  │ │   class / id / metrics   │ │
│                                  │ │   Growth History (預留)  │ │
│                                  │ │   [View in 3D] [Clear]   │ │
│  3D GS viewer                    │ └──────────────────────────┘ │
│  [Natural | Colony color | ↺]    │ ┌──────────────────────────┐ │
│   <splats>                       │ │ Environmental Monitoring │ │
│                                  │ │   4 readings (SST/pH/    │ │
│                                  │ │     Sal/DO) + 4 charts   │ │
│  Controls (▼ 可展開快捷鍵說明)   │ │   24h / 7d / 30d toggle  │ │
│                                  │ │   30s 即時 jitter        │ │
│                                  │ │   ⚙ alert settings       │ │
├──────────────────────────────────┴──────────────────────────────┤
│ SURVEY TIMELINE   ● T0 · 2026-05 (Current)  ─────  ○ T1 Planned │
├─────────────────────────────────────────────────────────────────┤
│ Footer · Demo disclaimer                                        │
└─────────────────────────────────────────────────────────────────┘
```

- CSS Grid `grid-cols-12`，左 viewer 7-8 欄、右 panels 4-5 欄
- `body { overflow: hidden }`，整頁不滾動，內部 panel 自己有 scroll

### 4.3 資料流

```
GoPro 影片 + COLMAP
    → Brush GS training (30k iter)
    → instance segmentation + colony metrics
    → SuperSplat 手動調視角 (bake transform 進 splat 座標)
    → PLY → SOG 壓縮 (@playcanvas/splat-transform, 201 MB → 8-15 MB, ~14×)
    → rebuild_colonies.py 對位
    → assets/ → 網頁 fetch
```

主整合頁載入流程：
1. `fetch('environment_data.json')` ← 環境模擬資料
2. `fetch('./assets/colonies.json')` ← colony metadata
3. `fetch('./assets/scene_bounds.json')` ← scene bbox
4. Spark `SplatMesh('./assets/coral_main_2.sog')` ← Natural 模式主模型
5. 首次 hover canvas 時 lazy load `coral_instances_2.sog` ← Colony color overlay
   （弱裝置：mobile UA / hardwareConcurrency<4 / deviceMemory<4 不載 overlay）

---

## 5. 功能 (Features)

### 5.1 3D Viewer

- **Mode 切換**
  - `Natural`：原始自然色 (coral_main_2.sog)
  - `Colony color`：依 instance 染色 (coral_instances_2.sog)
- **Hover 高亮**：滑鼠移到 colony 上時，該 colony 區域用 instance 染色 overlay
  亮起（Route A 實作，bbox 級精度）
- **點擊 picking**（三段式 fallback）：
  1. Pass 1：Raycaster vs 38 個 colony Box3
  2. Pass 2：點到 splat → 撈附近 colony
  3. Pass 3：螢幕座標投影最近 centroid (100 px 內)
- **flyToColony 動畫**：點擊後鏡頭 700ms ease-in-out 飛到 close-up
- **Debug bbox**：勾選後顯示全 38 個 colony bbox wireframe

### 5.2 互動 / 快捷鍵

| 操作 | 行為 |
|---|---|
| 點 splat | 選取最近 colony + 動畫飛 close-up |
| 拖動 (>8 px) | OrbitControls 旋轉 |
| Wheel | Zoom |
| Right-drag | Pan |
| `F` | Re-fit camera |
| `R` | Reset view (飛回 initial 視角 + 取消選取) |
| `Esc` | Clear selection (不動 camera) |
| Header 齒輪 | 「Custom alerts coming soon」modal (預留) |
| Timeline T1 | 「Future survey not yet conducted」modal (預留) |

### 5.3 Colony Panel

- 顯示選取 colony 的 class、id、size、bbox volume、convex hull、bleaching proxy、
  density、branchiness、mean RGB / HSV 等
- **Growth History 區塊**（預留）：T0 baseline，待 T1 調查後填入
- **View in 3D** 按鈕：再次飛到該 colony

### 5.4 Environmental Monitoring（模擬資料）

- **4 個讀數卡片**：SST (°C) / pH / Salinity (‰) / DO (mg/L)，每 30 秒 ±0.1 jitter
- **4 個趨勢圖**（Chart.js）：30 天歷史時序
- **24h / 7d / 30d toggle**：切換時間範圍
- **Bleaching warning**：SST 圖在 29°C 處紅色虛線；≥28.5°C 的點顯紅 dot
- **Alert settings**（齒輪）：modal「Feature coming soon」(預留)

### 5.5 Demo 標註（全頁清楚標示）

- 頁面標題 `[Demo Data]` 橘色 badge
- 環境區標題 `(Simulated)` 灰字
- 每個讀數卡片右上 `demo` tag
- Footer 完整 disclaimer：
  > Environmental sensor data shown is simulated for demonstration.
  > 3D coral model and colony classifications are derived from real
  > field survey data (T0: 2026-05). Sensor integration is planned.

### 5.6 未來預留功能 (Disabled state)

- **Timeline T1**：marker 可點，跳「Future survey not yet conducted」
- **Growth History**：colony 面板內，目前顯示「No previous data (T0 baseline)」
- **Custom alert thresholds**：環境區齒輪 modal
- **真實感測器整合**：footer 已聲明 sensor integration planned

---

## 6. 重新產生環境模擬資料（選用）

若想換時間範圍或重新跑 random seed：

```bash
python generate_demo_data.py
# 會覆寫 environment_data.json
```

只用 Python 標準庫（`json` / `math` / `random` / `datetime`），無需額外套件。
固定 seed=42，可重現結果。

---

## 7. 疑難排解

| 症狀 | 可能原因 | 解法 |
|---|---|---|
| 開頁面空白、console 報 importmap 錯 | 瀏覽器版本太舊 | 用 Chrome/Edge/Firefox 最近版本 |
| 3D 模型載不出來、停在 loading | server 把 `.sog` 當文字 / MIME 錯 | 確認 server 對 `.sog` 回 `application/octet-stream` 或讓瀏覽器直接 fetch 二進位 |
| CORS 錯誤 fetch `.json` 失敗 | 用 `file://` 直接開 HTML | 必須透過 HTTP server 開（見 §2） |
| 字體 / 圖表載不出來 | 部屬環境無法連外網 CDN | 改用 self-hosted lib，編輯 `index.html` 把 CDN URL 換成本地路徑 |
| 畫面全黑無 error | (歷史 mkkellogg 問題，目前 Spark 已修) 或 GPU 不支援 WebGL2 | 開瀏覽器 chrome://gpu 確認 WebGL2 可用 |
| 手機/平板 hover 失效 | 預期行為 | 弱裝置 fallback：不載 overlay，只用 cursor:pointer + tooltip |

---

## 8. 進一步閱讀

`ARCHITECTURE.md` 包含：
- 完整資料流（含 PLY → SOG pipeline、SuperSplat transform bake）
- mkkellogg viewer → Spark 遷移踩雷紀錄（7 個 quirks）
- 3D viewer 內部 State 結構
- Picking 三段式 fallback 細節
- 環境資料模擬公式
- Migration history (2026-05-18 / 2026-05-19)
