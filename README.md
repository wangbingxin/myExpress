# myExpress

创建项目
```
	mkdir myExpress  // 创建目录
	cd myExpress  // 进入目录
	npm init  // 创建packject.json文件
	npm install express -S // 安装express包
	创建入口文件app.js
```
创建入口文件app.js
```
	const express=require('express') // 引入express依赖

	const app=express() // 生成express实例

	// 挂载跟路由控制器
	app.get('/',(req,res)=>{
		res.send('Hello world!')
	})

	app.listen(8080) // 监听8080端口号并启动程序
```
启动项目
```
	node app.js
```
也可以使用express应用生成器快速创建项目框架
```
	npm install express-generator -g  // 全局安装express应用生成器
	express project_name  // 创建项目
	cd project_name
	npm install  // 安装依赖
	npm start  // 启动项目
```
开发过程中，每次文件修改了必须重新启动项目才能预览效果，我们需要supervisor来解决这个问题
```
	npm install -g supervisor  // 全局安装supervisor
	supervisor --harmony app  // 使用supervisor启动项目，不需要重启项目，刷新就可以预览效果

	将该命令写入package.json配置文件，每次只需执行npm run dev即可使用supervisor启动项目
	"scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "dev": "supervisor --harmoney app"
	}

	线上可以使用PM2或forever进程管理工具，开发环境下使用supervisor即可
```
