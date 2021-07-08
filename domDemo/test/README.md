## 获取元素的方式
    1.getElementById()
    2.getElementsByTagName()
        element.getElementsByTagName()
    3.H5新增
        1.getElementsByClassName()
        2.querySelector()
        3.querySelectorAll()
    4.获取特殊元素
        1.document.body   --获取body元素
        2.document.documentElement   --获取html元素对象


## 常见的鼠标事件
    onclick
    onfocus
    onblur
    onmouseover
    onmouseout
    onmousemove
    onmouseup
    onmousedown
    .......

## 操作元素
    1. 改变元素内容
        (1) element.innerText  不识别html标签 非标准   去除空格和换行  可读写
        (2) element.innerHTML  识别html标签   W3C标准  保留空格和换行  可读写
    2. 修改元素属性
        1.例：<img src="" title="">
            element.src="test.jpg"  element.title="test"  
        2.表单元素的属性操作
            type value checked selected disabled
        3.样式属性操作
            element.style 行内样式操作
            element.className 类名样式操作
        4.属性操作
            (1) 获取属性值
                element.属性   获取内置属性值
                element.getAttribute('属性') 获取自定义的属性
            (2) 设置属性值
                element.属性 = '值'
                element.setAttribute('属性','值')
            (3) 移除属性
                removeAttribute('属性')
        (⬆⬆需要区分内置属性和自定义属性)
            (4) H5为了方便区分内置属性和自定义属性,规定自定义属性要以 data- 开头
                dataset 是一个集合里面存放所有以data开头的自定义属性
                获取自定义属性值的方法：
                    1. element.getAttribute('data-head-index')  
                    2. element.dataset.headIndex
                    3. element.dataset['headIndex']

## 节点操作
    1. 父级节点
        node.parentNode

    2. 子节点
        (1) parentNode.childNodes (标准) 包括所有子节点，含元素节点 文本节点等等
        (2) parentNode.firstChild 
            parentNode.lastChild
        
        (3) parentNode.childNode  (非标准) 返回所有的子元素节点  实际开发中常用
        (4) parentNode.firstElementChild   (有兼容性问题，IE9以上)
            parentNode.lastElementChild

        ---实际开发的写法,既没有兼容性问题又返回第一个/最后一个子元素
            element.children[0]
            element.children[element.children.length-1]  

    3. 兄弟节点
        (1) node.nextSibling
            node.previousSibling
        (2) node.nextElementSibling      (IE9以上)
            node.previousElementSibling

    4. 创建和添加节点
        (1) document.createElement('标签名')
        (2) node.appendChild(child)
        (3) node.insertBefore(child,指定元素)

    5. 删除节点
        node.removeChild(child)

    6. 复制节点
        node.cloneNode()      括号参数为空或false,则是浅拷贝,即只克隆复制节点本身，不克隆里面的子节点
        node.cloneNode(true)  括号参数为true,则是深拷贝,即克隆复制节点本身和里面的子节点

    7. 三种创建元素节点的区别(见question文件夹)
        document.write() 
            如果页面文档流加载完毕，再调用这句话会导致页面重绘(即页面中原有的元素会被新创建的元素替代)
        element.innnerHTML()
            创建多个元素效率更高(不要拼接字符串,采取数组形式拼接),结构稍微复杂
        document.createElement()
            创建多个元素效率稍微低一点点,但是结构更清晰

## 绑定事件的两种方法
    1.(传统的注册方式)利用on开头的事件,如onclick onblur等
        绑定事件的唯一性,同一元素同一个事件只能设置一个处理函数,最后注册的处理函数将会覆盖前面注册的处理函数
    2.(方法监听注册方式) addEventListener
        同一个元素同一个事件可以注册多个监听器(IE9以上)
        例如：div.addEventListener('click',function(){alert('hi')})
    3.attachEvent (IE9以前的版本支持) --不推荐
        div.attachEvent('onclick',function(){alert('hi')})

## 删除事件(见P60删除事件.html)

## DOM事件流
    1.DOM事件流分为3个阶段：
        捕获阶段 -> 当前目标阶段 -> 冒泡阶段
    2.JS代码中只能执行捕获或者冒泡其中的一个阶段
        -- onclick 和 attachEvent只能得到冒泡阶段
        -- addEventListener(type,function,useCapture) 
            第三个参数是true，表示在事件捕获阶段调用事件处理程序;
            第三个参数是false(不写默认就是false),表示在事件冒泡阶段调用事件处理程序
    3.实际开中我们很少使用事件捕获，我们更关注事件冒泡
    4.有些事件是没有冒泡的，比如 onblur、onfocus、onmouseenter、onmouseleave

## 事件对象
    1.什么是事件对象
        element.onclick = function(event){
            event = event || window.event   //ie678无法兼容event,用 window.event 替代
            console.log(event)
        }
    2.event.target 与 this 的区别
        event.target 返回的是触发事件的对象(元素)  
        this 返回的是绑定事件的对象(元素)
        也就是说，event.target点击了哪个元素就返回哪个元素，this哪个元素绑定了这个事件，那么就返回它
        (event.currentTarget 与 this 非常相似，但它有兼容性问题)
## 

    