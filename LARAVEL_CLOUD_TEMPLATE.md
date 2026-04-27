# Laravel Cloud 畫面填寫模板（一次貼上版）

> 你剛剛說 `docs/laravel-cloud-template.md` 沒看到，所以我另外放一份在專案根目錄。

## Build Command

```bash
composer install --no-interaction --prefer-dist --optimize-autoloader
npm ci
npm run build
php artisan optimize
```

## Deploy Command

```bash
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Env Keys（一次貼上）

```dotenv
APP_NAME="Korea Trip 2026"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://<your-domain>
APP_KEY=<base64-app-key>

LOG_CHANNEL=stack
LOG_LEVEL=info

DB_CONNECTION=mysql
DB_HOST=<db-host>
DB_PORT=3306
DB_DATABASE=<db-name>
DB_USERNAME=<db-user>
DB_PASSWORD=<db-password>

VITE_FIREBASE_API_KEY=<firebase-api-key>
VITE_FIREBASE_AUTH_DOMAIN=<project-id>.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=<project-id>
VITE_FIREBASE_STORAGE_BUCKET=<project-id>.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=<messaging-sender-id>
VITE_FIREBASE_APP_ID=<firebase-app-id>
VITE_USE_FIREBASE_EMULATOR=false
```

## 欄位對照

- Repository: 你的 Git Repo
- Branch: `main`（或部署分支）
- Build Command: 貼上方 Build Command
- Deploy Command: 貼上方 Deploy Command
- Runtime: `PHP 8.3+`
- Health Check Path: `/`
