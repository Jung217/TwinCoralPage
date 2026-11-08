# TwinCoralPage · 珊瑚礁數位孿生平台

[DigitalTwinCoral](https://github.com/Jung217/DigitalTwinCoral) 的靜態發佈版，由 GitHub Actions 部署到 GitHub Pages（`.github/workflows/deploy.yml`），發佈根目錄就是 repo 根目錄。

## 頁面

| 網址 | 內容 | 來源（DigitalTwinCoral） |
| --- | --- | --- |
| `/` | 轉到 `/twin/` | — |
| `/twin/` | 3D 數位孿生頁面，另含 `environment.html` 環境監測、`growth_simulator.html` 成長情境模擬、`fish-debug.html` 魚類除錯 | `digital_twin_page/digital_twin_deploy/` |
| `/water/` | 水體模擬 | `water_demo/dist/`（Vite build 產物） |
| `/ted/` | 實驗場域魚群追蹤，魚類 FBX 共用 `/twin/assets/fish/` | `ted_fish/` |

所有頁面之間都用相對路徑互連，因此可以直接放在 `https://<user>.github.io/TwinCoralPage/` 這種子路徑下。

## 更新方式

在 DigitalTwinCoral 修改後，把對應資料夾覆蓋過來再 push：

- `twin/`：複製 `digital_twin_page/digital_twin_deploy/`，不含 `*.zip`、`*.md`、`*.py`、`server.js`、`source_data/`（這些是原始檔或開發用，頁面不會載入）
- `ted/`：複製 `ted_fish/`，不含 `*.md`
- `water/`：在 DigitalTwinCoral 根目錄執行 `npm run build:water`，再複製 `water_demo/dist/`

## 本機預覽

`.sog`、`.glb` 需要 HTTP 伺服器，`file://` 開不起來。在 repo 根目錄：

```powershell
npx serve .
```
