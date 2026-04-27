# NPM Registry 切換指南（受限網路環境）

本專案預設使用 `https://registry.npmjs.org/`（見 `.npmrc`）。

若環境透過 Proxy 封鎖外部 npm registry，請切換到公司內部 npm registry（如 Artifactory / Nexus / Verdaccio）。

## 方式 A：單次安裝

```bash
NPM_CONFIG_REGISTRY=https://<your-internal-registry> npm install
```

## 方式 B：全域設定（目前使用者）

```bash
npm config set registry https://<your-internal-registry>
npm install
```

## 方式 C：專案級設定

編輯專案根目錄 `.npmrc`：

```ini
registry=https://<your-internal-registry>
```

## 驗證

```bash
npm config get registry
npm ping --registry=https://<your-internal-registry>
```

若 `npm ping` 成功，再執行 `npm install`。
