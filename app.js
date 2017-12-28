const express=require('express')  // 引入express依赖

const app=express() // 创建express实例

// 对首页的访问返回"Hello world!"
app.get('/',(req,res)=>{
	res.send('Hello world!')
})

app.listen(8080)  // 启动端口号为8080的服务