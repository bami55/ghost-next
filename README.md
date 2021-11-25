## 開発環境準備

`front/.env.example` をコピーして `front/.env.development.local` を作成する。
```sh
cp front/.env.example front/.env.development.local
```

Dockerコンテナを起動する。
```sh
docker-compose up --build
```

http://localhost:2368/ghost にアクセスしてユーザー作成し、Ghostのダッシュボードを開く。

http://localhost:2368/ghost/#/settings/integrations にアクセスして Add custome integration でContent API keyを取得する。

`front/.env.development.local` のCONTENT_API_KEYに貼り付ける。

Dockerコンテナを再起動する（コンテナの停止は `Ctrl + C`）。
