
- Forked from [tangly1024/nextnotion](https://github.com/tangly1024/notionnext)

- [NotionNext 文档](https://docs.tangly1024.com/article/latest)

- 此仓库对应服务器主站 : **https://www.dalechu.cn/**  

- Vercel 镜像 : https://for.epicurus.fun

- [试验仓库](https://github.com/Dalecuc/nextnotion), 一些新功能会在其中测试

---

<br/>

<p align="center">
    <b>用 Docker 部署</b>
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

拉取 [nextnotion 镜像](https://github.com/daleveral/nextnotion/pkgs/container/nextnotion), 体积约 200MB :

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

运行容器 ( 将 MY-ID-STR 替换成自己的 NOTION_PAGE_ID ) :
```shell
docker run --name nextnotion -d -p 3000:3000 -e NOTION_PAGE_ID=MY-ID-STR nextnotion:latest
```

<br/>
<br/>


---

<br/>

<p align="center"> <b>对 NotionNext 的更改 </b> </p>

- Aplayer 音乐播放器 : 
    - 歌单放置在单独的 [musiclist.js](./musiclist.js) 文件中
    - 使用修改后的 aplayer 相关 [css](https://jsd.onmicrosoft.cn/gh/Daleveral/csslivb/cssv3.css) 和 [js](https://jsd.onmicrosoft.cn/gh/Daleveral/csslivb/jsv2.js) 来美化播放器

- Heo 主题 :
    - 外链都在新标签页打开
    - "最新发布" 的文章列表以发布日期排列, 而非更新日期
    - 首页斜向滚动的技能图标更改了一部分
    - 更改暗色模式一些组件的配色
    - 首页自定义的文字、标语、链接等

- 文章里的所有链接都在新标签页打开, 而非当前标签页

- 解决了 Artalk 的两处 Bug
    - 使用最新版本的 js / css 引用
    - 明暗模式切换时, 修复显示异常问题

- 删去了部分主题, 保留下来 8 个

- 基于 [NotionNext](https://docs.tangly1024.com/article/latest)  4.6 ~ 4.7 之间的版本, 会选择性地同步上游的更新

<br/>
<br/>
