# Laravel Cloud 部署填寫模板（Korea Trip 2026）

> 這份是「一次貼上版」：把專案連到 Laravel Cloud 後，照下列欄位填即可。

## 1) Build Command（貼上整段）

```bash
composer install --no-interaction --prefer-dist --optimize-autoloader
npm ci
npm run build
php artisan optimize
```

## 2) Deploy Command（貼上整段）

```bash
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

> 如果目前沒有資料庫 migration，可先改成：
>
> ```bash
> php artisan config:cache
> php artisan route:cache
> php artisan view:cache
> ```

## 3) Environment Variables（一次貼上版）

```dotenv
APP_NAME="Korea Trip 2026"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://<your-domain>
APP_KEY=<base64-app-key>

LOG_CHANNEL=stack
LOG_LEVEL=info

# Database（依你的實際服務調整）
DB_CONNECTION=mysql
DB_HOST=<db-host>
DB_PORT=3306
DB_DATABASE=<db-name>
DB_USERNAME=<db-user>
DB_PASSWORD=<db-password>

# Firebase Web SDK
VITE_FIREBASE_API_KEY=<firebase-api-key>
VITE_FIREBASE_AUTH_DOMAIN=<project-id>.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=<project-id>
VITE_FIREBASE_STORAGE_BUCKET=<project-id>.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=<messaging-sender-id>
VITE_FIREBASE_APP_ID=<firebase-app-id>
VITE_USE_FIREBASE_EMULATOR=false
```

## 4) Laravel Cloud 介面欄位對照

- **Repository**: 選這個 Git 專案
- **Branch**: `main`（或你要部署的分支）
- **Build Command**: 使用上方第 1 段
- **Deploy Command**: 使用上方第 2 段
- **Runtime**: `PHP 8.3+`（建議）
- **Web Root**: 保持 Laravel 預設（通常不用改）
- **Health Check Path**: `/`（或你之後新增 `/health`）

## 5) 首次部署前本機先做一次

```bash
php artisan key:generate --show
```

把輸出值貼到 Laravel Cloud 的 `APP_KEY`。
