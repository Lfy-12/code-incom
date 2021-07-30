### jQuery中的AJAX
1. get请求
    语法：$.get(url,[data],[callback],[type])
        url: 请求的URL地址
        data: 请求携带的参数
        callback: 载入成功时回调函数，function(res){} res为响应体
        type: 设置返回内容合适 json、xml、html、script、text、_default
2. post请求
    (同上)
3. 通用型方法
    $.ajax({
        url:  ,
        data:  ,
        dataType:  ,
        success:   ,
        timeout:   ,
        error:   ,
        header:  ,
        ....
    })

### axios
    1. 配置根路径
        axios.defaults.baseURL = ''
    2. axios.get(url[, config])
    3. axios.post(url[, data[, config]])
    4. axios(config)

### fetch()也能发送ajax请求

### 跨域
1. 同源策略
    同源：协议、域名、端口号，必须完全相同
    违背同源策略就是跨域
2. 如何解决跨域
    jsonp
    CORS  跨域资源共享
        设置响应头 response.setHeader("Access-Control-Allow-Origin","*")
                  response.setHeader("Access-Control-Allow-Method","*")