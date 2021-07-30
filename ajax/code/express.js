// P8-express框架介绍

// 1.引入erpress
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由规则
// request是对请求报文的封装
// response是对相应报文的封装
app.get('/server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('HELLO AJAX')
})
// P12
app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头 P14
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send('HELLO AJAX POST')
})
// P15
app.all('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')

    const data = {name:'lfy-lt1'}
    let str = JSON.stringify(data)

    response.send(str)
})
// ie P17
app.all('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send('Hello IE11111')
})
// delay P18
app.all('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    setTimeout(() => {
        // 设置响应体
        response.send('延时申请')
    }, 3000);
})
// jQuery P21
app.all('/server-jQuery',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    let data = {name:'lfy',age:18}
    // 设置响应体
    // setTimeout(() => {
    //     response.send(JSON.stringify(data))
    // }, 2500);
    response.send(JSON.stringify(data))
})
// axios P23
app.all('/server-axios',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    let data = {name:'lft',age:18}
    response.send(JSON.stringify(data))
})
// jsonp P28
app.all('/check-username',(request,response)=>{
    const data = {
        exist:1,
        msg:'error'
    }
    let str = JSON.stringify(data)
    response.end(`handle(${str})`)
})
// P29
app.all('/jquery-jsonp-server',(request,response)=>{
    const data = {
        name:'lfy',
        age:18
    }
    let str = JSON.stringify(data)
    let cb = request.query.callback
    response.end(`${cb}(${str})`)
})



// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log('已启动!!!!')
})