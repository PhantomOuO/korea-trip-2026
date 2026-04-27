# 在 Codex Run 內瀏覽專案（Laravel + Vite）

這份說明給「在 Codex Run 裡直接開畫面看 UI」使用。

## 1) 安裝依賴

```bash
composer install --no-interaction
npm install
```

## 2) 建議的本機開發方式（含 HMR）

開兩個 terminal：

### Terminal A（Laravel）

```bash
php artisan serve --host=0.0.0.0 --port=8000
```

### Terminal B（Vite）

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

然後在 Codex Run 的瀏覽器開：

- `http://127.0.0.1:8000`（Laravel 頁面）

> `@vite` 會自動連到 Vite dev server（5173）載入前端資源。

## 3) 只看 production build（不開 Vite）

```bash
npm run build
php artisan serve --host=0.0.0.0 --port=8000
```

然後開：

- `http://127.0.0.1:8000`

## 4) 常見問題

- 如果頁面空白，先看兩個 terminal 有沒有報錯。
- 如果 CSS/JS 沒更新，確認 Vite 是否真的跑在 `0.0.0.0:5173`。
- 如果 Laravel 起不來，先補 `.env` 與 `APP_KEY`：

```bash
cp .env.example .env
php artisan key:generate
```
