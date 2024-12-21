
- Forked from [tangly1024/nextnotion](https://github.com/tangly1024/nextnotion)

- [nextnotion Blog 文档](https://docs.tangly1024.com/article/latest)

- 此仓库对应服务器主站 : https://www.dalechu.cn/ 

- [试验仓库](https://github.com/Dalecuc/nextnotion) 对应 Vercel 镜像站 : https://www.epicurus.fun

---

<br/>

<p align="center">
    <b>在 Docker 上部署</b>
</p>

Debian 安装 docker :
```shell
apt update && apt install -y docker.io docker-compose jq
```

docker 换源
```shell
vim /etc/docker/daemon.json
```
```shell
systemctl daemon-reload && systemctl restart docker
```



<br/>

拉取 [我的 nextnotion 镜像](https://github.com/daleveral/nextnotion/pkgs/container/nextnotion) :

常规 : 

```shell
docker pull ghcr.io/daleveral/nextnotion:main  
```

加速镜像 : 

```shell
docker pull ghcr.linkos.org/daleveral/nextnotion:main
```

<br/>

镜像重命名 :
```shell
docker tag ghcr.linkos.org/daleveral/nextnotion:main nextnotion:latest 
```

```shell
docker images
docker rmi ghcr.linkos.org/daleveral/nextnotion:main
docker images
```

<br/>


创建和运行容器 :
```shell
docker run --name nextnotion -d -p=3000:3000 nextnotion:latest 
```

如果要指定环境变量 NOTION_PAGE_ID :
```shell
docker run --name nextnotion -d -p 3000:3000 -e NOTION_PAGE_ID=MY-ID-STR nextnotion:latest
```

<br/>
<br/>
