# TwinCoralPage · 珊瑚礁數位孿生平台

以 3D Gaussian Splatting 重建的珊瑚礁場景為核心，串接環境監測、成長情境推估與分割資料集瀏覽的靜態網站。

站台由 GitHub Actions 部署到 GitHub Pages，發佈根目錄是 `digital_twin_page/digital_twin_deploy/`，設定見 `.github/workflows/deploy.yml`。

## 頁面入口

發佈後所有網址都相對於站台根目錄（也就是 `digital_twin_deploy/`）。

| 網址 | 檔案路徑 | 說明 |
| --- | --- | --- |
| `/index.html` | `digital_twin_page/digital_twin_deploy/index.html` | 主頁，3D 檢視器（自然色／群落染色／Mesh／Mesh 群落四種模式） |
| `/environment.html` | `digital_twin_page/digital_twin_deploy/environment.html` | 環境監測，水溫／酸鹼值／鹽度／溶氧四項指標與趨勢圖 |
| `/growth_simulator.html` | `digital_twin_page/digital_twin_deploy/growth_simulator.html` | 成長情境推估，調整水質推估 7 屬未來成長與健康 |
| `/vis_labels/index_train.html` | `digital_twin_page/digital_twin_deploy/vis_labels/index_train.html` | 珊瑚分割資料集標記瀏覽（train 集，129 張） |
| `/fish-debug.html` | `digital_twin_page/digital_twin_deploy/fish-debug.html` | 魚類模型除錯面板，未掛在導覽列 |

四個主要頁面的頁首互相連結，`fish-debug.html` 需直接輸入網址。

## 完整目錄結構

```
TwinCoralPage/
├── .github/
│   └── workflows/
│       └── deploy.yml                     GitHub Pages 部署設定
├── LICENSE
├── README.md                              本檔
└── digital_twin_page/
    ├── start_server.ps1                   本機背景啟動 node server（見下方備註）
    └── digital_twin_deploy/               ← Pages 發佈根目錄
        ├── index.html                     主頁 · 3D 檢視器
        ├── environment.html               環境監測
        ├── growth_simulator.html          成長情境推估（檔名沿用舊稱）
        ├── fish-debug.html                魚類模型除錯面板
        ├── server.js                      本機靜態檔案伺服器
        ├── generate_demo_data.py          產生 environment_data.json 的展示資料
        ├── environment_data.json          環境監測時序資料
        ├── coral_growth_params.json       成長情境推估的 7 屬參數
        ├── cihci.png                      舊版 CIHCI logo，頁面已改用 🪸 emoji，目前無引用
        ├── README.md                      站台說明
        ├── ARCHITECTURE.md                架構說明
        │
        ├── assets/
        │   ├── characters/
        │   │   └── coral-chan.png         珊瑚娘立繪
        │   │
        │   ├── coral/                     3DGS 場景資產
        │   │   ├── coral_main_2.sog              礁石本體 splat            約 15 MB
        │   │   ├── coral_main_2_mesh.glb         礁石本體 mesh             約 35 MB
        │   │   ├── coral_instances_2.sog         珊瑚群落 splat            約 9 MB
        │   │   ├── coral_instances_2_mesh.glb    珊瑚群落 mesh             約 35 MB
        │   │   ├── colonies.json                 群落中心點與屬別標註
        │   │   └── scene_bounds.json             場景邊界，供相機初始化
        │   │
        │   └── fish/                      魚類模型
        │       ├── 3d-model.fbx
        │       ├── pez3.fbx
        │       ├── blue-tang/
        │       │   ├── source/Blue_Tang_ain.fbx
        │       │   └── textures/
        │       │       ├── 13006_Blue_Tang_v1_diff.jpg
        │       │       ├── blue_tang_smooth_Albedo.png
        │       │       ├── blue_tang_smooth_AO.png
        │       │       └── blue_tang_smooth_NM.png
        │       ├── clownfish/
        │       │   ├── source/clown_fish_ain.fbx
        │       │   └── textures/
        │       │       ├── clownfish_ver2_smooth_Albedo.png
        │       │       ├── clownfish_ver2_smooth_AO.png
        │       │       ├── clownfish_ver2_smooth_NM.png
        │       │       └── clownfish_ver2_smooth_RN.png
        │       ├── emperor-angelfish/
        │       │   ├── source/Emperor Angelfish.fbx          約 30 MB
        │       │   └── textures/
        │       │       ├── Emperor Angelfish Albedo.png
        │       │       ├── Emperor Angelfish N.png
        │       │       ├── Emperor Angelfish Normal.png
        │       │       └── Emperor Angelfish Spec.png
        │       ├── yellow-tang/
        │       │   ├── source/Fish 3_2.fbx
        │       │   └── textures/
        │       │       ├── DefaultMaterial_Alpha_1001.png
        │       │       ├── DefaultMaterial_Base_color_1001.png
        │       │       ├── DefaultMaterial_Metallic_1001.png
        │       │       ├── DefaultMaterial_Normal_1001.png
        │       │       └── DefaultMaterial_Roughness_1001.png
        │       └── zebrasoma/
        │           ├── source/butterfly_fish_ani.fbx
        │           └── textures/
        │               ├── butterfly_fish_Albedo.png
        │               ├── butterfly_fish_AO.png
        │               ├── butterfly_fish_NM.png
        │               └── butterfly_fish_RN.png
        │
        └── vis_labels/                    珊瑚分割資料集瀏覽
            ├── index_train.html                  瀏覽頁
            ├── logo.png                          舊版 logo，頁面已改用 🪸 emoji，目前無引用
            ├── train/                            標記疊圖原尺寸，約 35 MB
            │   └── frame_0001_vis.jpg … frame_0129_vis.jpg      129 張
            └── _thumbs_train/                    縮圖，約 3.5 MB
                └── frame_0001.jpg … frame_0129.jpg              129 張
```

各區塊佔用：`assets/coral` 約 93 MB、`assets/fish` 約 87 MB、`vis_labels` 約 39 MB、`assets/characters` 約 1.1 MB，其餘檔案合計約 0.4 MB。

## 程式引用的資產路徑

`index.html` 的載入設定集中在檔案上半段，改動資產位置時這幾條要一起改：

| 引用位置 | 路徑 |
| --- | --- |
| `index.html` 3DGS 設定 | `./assets/coral/coral_main_2.sog` |
| `index.html` 3DGS 設定 | `./assets/coral/coral_instances_2.sog` |
| `index.html` mesh 設定 | `./assets/coral/coral_main_2_mesh.glb` |
| `index.html` mesh 設定 | `./assets/coral/coral_instances_2_mesh.glb` |
| `index.html` 群落標註 | `./assets/coral/colonies.json` |
| `index.html` 相機初始化 | `./assets/coral/scene_bounds.json` |
| `index.html` 珊瑚娘 | `./assets/characters/coral-chan.png` |
| `index.html`、`fish-debug.html` 魚群 | `./assets/fish/blue-tang/source/Blue_Tang_ain.fbx` |
| 同上 | `./assets/fish/clownfish/source/clown_fish_ain.fbx` |
| 同上 | `./assets/fish/emperor-angelfish/source/Emperor Angelfish.fbx` |
| 同上 | `./assets/fish/yellow-tang/source/Fish 3_2.fbx` |
| 同上 | `./assets/fish/zebrasoma/source/butterfly_fish_ani.fbx` |
| 同上 | `./assets/fish/pez3.fbx` |
| `fish-debug.html` | `./assets/fish/3d-model.fbx` |
| `environment.html` 圖表資料 | `./environment_data.json` |
| `growth_simulator.html` 推估參數 | `./coral_growth_params.json` |
| `vis_labels/index_train.html` | `_thumbs_train/frame_*.jpg`、`train/frame_*_vis.jpg` |

外部相依全部走 CDN，沒有 build 步驟：Tailwind、Chart.js、chartjs-adapter-date-fns、oh-my-live2d、Google Fonts (Inter)。

## 本機執行

`.sog` 與 `.glb` 需要正確的 MIME 與 range request，直接用 `file://` 開啟會失敗，要起一個靜態伺服器。

```powershell
cd digital_twin_page\digital_twin_deploy
node server.js 8000
```

然後開 `http://localhost:8000/index.html`。

`digital_twin_page/start_server.ps1` 是背景啟動的版本，日誌寫到 `%LOCALAPPDATA%\digital_twin_server\`。注意它第 3 行的 `$root` 目前寫死成 `C:\Users\cihci\Desktop\digital_twin_deploy\digital_twin_deploy`，換一台機器要先改成自己的 `digital_twin_deploy` 絕對路徑才能用。

重新產生環境監測展示資料：

```powershell
cd digital_twin_page\digital_twin_deploy
python generate_demo_data.py
```

## 備註

- 站台圖示與頁首標誌統一使用珊瑚 emoji 🪸，以 SVG data URI 當 favicon，沒有額外圖檔相依。
- 部署使用 `actions/upload-pages-artifact`，不經過 Jekyll，因此 `vis_labels/_thumbs_train/` 這種底線開頭的目錄不會被略過。
- 主頁右上「選項」選單可切換群落框線、五種魚類，以及導覽員珊瑚娘的顯示與否；導覽員狀態存在 `localStorage` 的 `charVisible`。
