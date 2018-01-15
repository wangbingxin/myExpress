const express = require('express')  // 引入express依赖
const path = require('path')
const app = express()  // 生成express实例
const routes = require('./routes/routes')  // 引入路由文件
const sass = require('node-sass-middleware')  // 引入sass中间件

app.set('views', path.join(__dirname, 'views'))  // 指定模板文件目录
app.set('view engine', 'jade')  // 设置模板引擎为jade

// 调用express.static中间件访问静态文件
app.use(express.static(path.join(__dirname, 'public')))

// 使用sass中间件
app.use(
	sass({
		src:__dirname+'/public/',  // sass源文件目录
		dest:__dirname+'/public/'  // css文件的编译生成目录
	})
)

// 挂载路由
routes(app)

app.listen(8080,function(){
	console.log('成功启动8080端口服务')
})  // 监听8080端口号并启动程序