# ChatDZQ（AI工具链平台）部署指南

## 产品介绍

ChatDZQ（AI工具链平台） 是福建点石网络科技有限公司开发的开源大语言模型(LLM)应用开发平台。企业开发人员可以快速搭建生产级的生成式AI的应用。即使是非技术人员，也可以参与到AI应用的定义和数据运营过程中，全面提升企业智能化水平。产品支持企业基于私有知识库训练数字员工与数字分身，智能客服、智能质检等多种场景，帮助企业实现AI智能化升级。

## 环境要求

- 操作系统：Ubuntu 22.04
- Node.js 环境（PM2 依赖）
- Nginx（用于反向代理）
- 域名及 SSL 证书（用于 HTTPS 访问）

## 部署步骤

### 服务器准备
1. 购买并创建一台 Ubuntu 22.04 服务器
2. 确保有 root 或 sudo 权限
3. 确保服务器可以访问外网

### PM2 环境安装
```bash
# 在 /home 目录下执行安装脚本
curl -o /home/ecs_pm2.sh https://chatdzq-hz.oss-cn-hangzhou.aliyuncs.com/code/shell/ecs_env/ecs_pm2.sh && chmod +x /home/ecs_pm2.sh && /home/ecs_pm2.sh

# 环境检查 
# 服务器重新连接，检查环境是否安装。
pm2 -v
# 返回版本信息
5.4.2 
# 环境安装成功
```

### 代码部署

```bash
# 克隆代码仓库
git clone git@github.com:wmqdzq/chatdzq.git

# 进入项目目录并设置权限
cd chatdzq/code
chmod 775 download.sh
chmod 775 run.sh

# 启动服务
./run.sh
```

服务默认在 3000 端口启动，可通过 `http://<服务器IP>:3000` 访问
![index](./images/index.png)



### Nginx 配置

1. 安装 Nginx
2. 准备域名 SSL 证书
3. 创建 Nginx 配置文件 `/etc/nginx/conf.d/chatdzq.conf`：

```nginx
upstream chatdzq_service {  
    server 127.0.0.1:3000 weight=1;
}

server {
    listen 443 ssl;
    server_name your-domain.com;  # 替换为您的域名

    # SSL 证书配置
    ssl_certificate /etc/nginx/conf.d/server.crt;     # 替换为您的证书路径
    ssl_certificate_key /etc/nginx/conf.d/server.key; # 替换为您的密钥路径

    client_max_body_size 1024M;

    # 流式响应配置
    proxy_cache off;  # 关闭缓存
    proxy_buffering off;  # 关闭代理缓冲
    chunked_transfer_encoding on;  # 开启分块传输编码
    tcp_nopush on;  # 开启TCP NOPUSH选项，禁止Nagle算法
    tcp_nodelay on;  # 开启TCP NODELAY选项，禁止延迟ACK算法
    keepalive_timeout 300;  # 设定keep-alive超时时间为65秒s

    location / {
        proxy_pass http://chatdzq_service;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

4. 重启 Nginx：
```bash
nginx -s reload
```

## 去掉端口，使用域名访问是否正常访问。


### 可信域名验证配置

1. 访问 [工具链管理后台](https://cloud.dzq.com) 注册账号
2. 进入「设置」-「开发者接口」-「设置可信域名」
3. 下载验证文件并放置到配置的路径中：`/home/verify.txt` ，并设置读取权限`chmod 775 verify.txt`
4. 在 Nginx 配置文件中，增加配置
```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;  # 替换为您的域名

    ......

    # 可信域名验证文件配置
    location /verify.txt {
    		# 替换为您的验证文件路径。注意设置读取权限 `chmod 775 verify.txt`
        alias /home/verify.txt;  
    }
}
```
5. 在平台中完成可信域名验证
![index](./images/01.png)



## 验证部署
1. 至此，您完成了所有配置，使用配置的域名访问服务（https://your-domain.com）
![index](./images/02.png)
2. 进入「设置」-「站点配置」完善您的站点配置
