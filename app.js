const express = require('express')  // 引入express依赖
const app = express() // 生成express实例
const routes = require('./routes') // 引入路由文件

app.set('views', path.join(__dirname, 'views'))  // 指定模板文件目录
app.set('view engine', 'jade')  // 设置模板引擎为jade

// 挂载路由
routes(app)

app.listen(8080)  // 监听8080端口号并启动程序