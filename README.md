# chat.dzq.com

# 点石科技
ChatDZQ隶属于福建点石网络科技有限公司，致力通过开源的大语言模型(LLM)应用开发创新平台。企业开发人员可以快速搭建生产级的生成式AI的应用。即使是非技术人员，也可以参与到AI应用的定义和数据运营过程中，全面提升企业智能化水平。产品支持企业基于私有知识库训练数字员工与数字分身，智能客服、智能质检等多种场景，帮助企业实现AI智能化升级。


## 环境准备 pm2
```shell
curl -o /home/ecs_pm2.sh https://chatdzq-hz.oss-cn-hangzhou.aliyuncs.com/code/shell/ecs_env/ecs_pm2.sh && chmod +x /home/ecs_pm2.sh && /home/ecs_pm2.sh

```

## 克隆代码
```shell
git clone git@github.com:wmqdzq/chatdzq.git
```

## 启动命令
```shell

# 进入 code 目录
chmod 775 download.sh
chmod 775 run.sh

./run.sh

```
### 默认端口3000


![index](./images/index.png)



## 安装nginx
## 申请域名证书下载到配置目录

## aws.conf
```shell
upstream work.chatdzq.cn {  
    server 127.0.0.1:3000 weight=1;
}

server {
    listen 443 ssl;
    # 修改 xxx.xxx.com 为你的域名
    server_name xxx.xxx.com;

    # 域名证书更具实际存储地址修改
    ssl_certificate /etc/nginx/conf.d/server.crt;
    ssl_certificate_key /etc/nginx/conf.d/server.key;

    client_max_body_size 1024M;

    # 流式处理支持
    proxy_cache off;  # 关闭缓存
    proxy_buffering off;  # 关闭代理缓冲
    chunked_transfer_encoding on;  # 开启分块传输编码
    tcp_nopush on;  # 开启TCP NOPUSH选项，禁止Nagle算法
    tcp_nodelay on;  # 开启TCP NODELAY选项，禁止延迟ACK算法
    keepalive_timeout 300;  # 设定keep-alive超时时间为65秒s

    location / {
		proxy_pass http://work.chatdzq.cn;
		proxy_set_header Host $host:$server_port;
		proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    # 修改 xxxx.txt 为你的文件名称
    location /xxxx.txt
        {
        # 上传文件的地址。权限修改 chmod 775 xxxx.txt
        alias /home/xxxx.txt;
        }

}


```

## 重启nginx 
```shell
nginx -s reload
```

# 使用域名访问，不用加端口，根据不同云服务器配置相对应的安全组端口和白名单。