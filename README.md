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
pm2 start ecosystem.config.js
```
### 默认端口3000


![index](./images/index.png)