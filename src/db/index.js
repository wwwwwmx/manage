//引入需要的模块

const express = require('express')
const  http = require('http')
const  cors = require('cors')

//初始化
const app = express()
//创建一个http服务器
const serve = http.createServer(app)

app.use(cors())

//初始化io实例
const io = require('socket.io')(serve,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
})

//服务器socket连接
io.on('connection',(socket)=>{
    //断开连接
    socket.on('disconnect',()=>{
        //广播给所有
        socket.broadcats.emit('callEnd')
    })
})
serve.listen(5000,()=>{console.log('服务器开始运行在5000上')})