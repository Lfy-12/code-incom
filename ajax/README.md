### AJAX简介
    AJAX全称为Asynchronous JavaScript And XML，就是异步的 JS 和 XML。
    通过AJAX可以在浏览器中向服务器发送异步请求，最大的优势: 无刷新获取数据。
    AJAX不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。

### XML简介
    XML 可扩展标记语言。
    XML 被设计用来传输和存储数据。
    XML 和 HTML类似，不同的是HTML中都是预定义标签，而XML中没有预定义标签，全都是自定义标签，用来表示一些数据。
```
    <student>
        <name>孙悟空</name>
        <age>18</age>
        <gender>男</gender>
    </student>
```
    现在已经被JSON取代了。
```
{"name":"孙悟空","age":18,"gender":"男"}
```

### AJAX的特点
1. 优点
    可以无需刷新页面而与服务器端进行通信
    允许你根据用户事件来更新部分页面内容
2. 缺点
    没有浏览历史，不能回退
    存在跨域问题(同源)
    SEO不友好，(SEO意思: 是搜索引擎优化)

### HTTP协议请求与响应的结构
1. 请求报文
    行 头 空行 体
    请求方法 URL 协议版本  --行
    如果是GET请求，请求体为空，如果是POST请求，请求体可以不为空。、
2.  响应报文
    行 头 空行 体
    协议版本 状态码 状态码描述  --行

### AJAX请求  P10-P20 + express.js
    1. 设置响应体数据的类型
        xhr.responseType = 'json';
        服务器响应JSON数据
        后端把JSON对象转换为字符串传递给前端，前端通过JSON把传递过来的字符串转换为对象并输出
    2. IE缓存问题
        xhr.open("GET",'http://127.0.0.1:8000/ie?time='+ Date.now() );
    3. 请求异常与网络超时
        xhr.timeout = 2000; //超时设置2s设置
        xhr.ontimeout = function(){
            alert('网络异常,请稍后重试');
        }
        //网络异常问题
        xhr.onerror = function(){
            alert('你的网络似乎出了一点问题');
        }
    4. 取消发送
        xhr.abort();   //abort 中止
    5. 请求重复发送
        利用 节流阀 和 xhr.abort() ,保证每次只有一个请求

### 使用jQuery发送AJAX请求
1. get请求   $.get(url,[data],[callback],[type])
    url: 请求的URL地址
    data: 请求携带的参数
    callback: 载入成功时回调函数，function(res){} res为响应体
    type: 设置返回内容合适 json、xml、html、script、text、_default

2. post请求  $.post(url,[data],[callback],[type])

3. 通用型方法  $.ajax({})
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

### 使用axios发送AJAX请求
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
    jsonp  script标签
        在网页有一些标签天生具有跨域能力，比如: img link iframe script
​        JSONP就是利用script标签的跨域能力来发送请求的

    CORS  跨域资源共享
        设置响应头 response.setHeader("Access-Control-Allow-Origin","*")
                  response.setHeader("Access-Control-Allow-Method","*")