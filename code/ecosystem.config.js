module.exports = {
    apps: [
      {
        name: 'aws-3000',  // 设置启动项目名称
        exec_mode: 'cluster',
        instances: 'max',
        // 注意这里的相对路径
        // script: './home/server/index.mjs',
        // 注意这里的相对路径
        script: './server/index.mjs',
        env:{
          PORT:3000
          // 修改端口
        },
      }
    ]
  }