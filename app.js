const express=require('express')  // 引入express依赖

const app=express() // 生成express实例

// 挂载跟路由控制器
app.get('/',(req,res)=>{
	res.send('Hello world!')
})

app.listen(8080)  // 监听8080端口号并启动程序