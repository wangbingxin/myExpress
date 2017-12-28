# myExpress

### 创建项目

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

	const app=express() // 创建express实例

	// 对首页的访问返回"Hello world!"
	app.get('/',(req,res)=>{
		res.send('Hello world!')
	})

	app.listen(8080) // 启动端口号为8080的服务
```
```
	node app.js  // 启动项目
```
	
	
也可以使用express应用生成器快速创建项目框架
	
```
	npm install express-generator -g  // 全局安装express应用生成器
	express project_name  // 创建项目
	cd project_name
	npm install  // 安装依赖
	npm start  // 启动项目
```
