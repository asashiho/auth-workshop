# バックエンドアプリ(Java)


## コンテナビルド

```bash
ACR_NAME=<your acr name>
az acr login --name $ACR_NAME


tag=1.0.0
docker image build -t $ACR_NAME.azurecr.io/backend:$tag .
docker run -it -p 8080:8080 $ACR_NAME.azurecr.io/backend:$tag

docker push $ACR_NAME.azurecr.io/backend:$tag
```