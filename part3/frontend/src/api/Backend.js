import axios from 'axios';

export default axios.create({
    // ここをご自身のバックエンドAPIのエンドポイントURLに変更してください
    //
    // 例: WebAppsのバックエンドAPIの名前が「auth-workshop-user1-backend」の場合
    //     baseURL: "https://auth-workshop-user1-backend.azurewebsites.net/api/v1",
    //
    // 例: Static Web AppsでAPI認証を有効にした場合
    //     baseURL: "/api/v1",
    baseURL: "https://auth-workshop-user20-backend.azurewebsites.net/api/v1",
    headers: {
        'Content-Type': 'application/json',
    }
})

