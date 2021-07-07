# 获取元素的方式
## getElementById()
## getElementsByTagName()
    element.getElementsByTagName()
## H5新增
    1.getElementsByClassName()
    2.querySelector()
    3.querySelectorAll()
## 获取特殊元素
    1.document.body   --获取body元素
    2.document.documentElement   --获取html元素对象


# 常见的鼠标事件
    onclick
    onfocus
    onblur
    onmouseover
    onmouseout
    onmousemove
    onmouseup
    onmousedown
    .......

# 操作元素
## 改变元素内容
    1.element.innerText  不识别html标签 非标准   去除空格和换行  可读写
    2.element.innerHTML  识别html标签   W3C标准  保留空格和换行  可读写
## 修改元素属性
    1.例：<img src="" title="">
      element.src="test.jpg"  element.title="test"  
    2.表单元素的属性操作
      type value checked selected disabled
    3.样式属性操作
      element.style 行内样式操作
      element.className 类名样式操作