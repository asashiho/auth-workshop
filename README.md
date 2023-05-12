# Azureアプリケーション認証認可 ワークショップ

## Part 1: はじめての認証認可～カレンダーアプリを作ってみよう～

このパートでは、Azure ADを使ったアプリケーション認証認可の基礎を学ぶため、ローカルPCで動くアプリケーションとMicrosoft 365の情報をAPI経由で取得/更新できる **「Graph API」** を使って簡易カレンダーアプリを作ります。


## Part 2: AppServiceを使ったWebアプリケーションの認証認可

このパートでは、Azure AppServiceを使ってフロントエンドアプリとバックエンドアプリを動かし、フロントエンドアプリでAppServiceの組み込み認証機能を使って、コーディングレスでアプリケーションに認証機能を追加します。

## Part 3: シングルページアプリケーションとAPIの認証認可

ここまでのワークショップでAzure ADを使ったアプリケーションの認証認可の概要とAppServiceの組み込み認証機能を使うと、簡単に認証認可の処理をアプリケーションに取り込むことができ、ユーザおよびアプリケーションの管理をAzure ADで管理できることが分かりました。

今回のサンプルはフロントエンドはReactによるシングルページアプリケーション、バックエンドAPIはSpring Boot/JPAを使ったREST APIになっています。

このパートでは、より実践的なAzureアーキテクチャとしてStatic Web AppsとAppServiceを組み合わせた構成での認証認可を実装していきます。

## ドキュメント

[Azure Auth Workshop🔧](https://asashiho.github.io/auth-workshop)

ローカルで動かすときは、次のコマンドを実行してサーバを起動してください。

```bash
npm install -g docsify-cli@latest
docsify serve .
```
