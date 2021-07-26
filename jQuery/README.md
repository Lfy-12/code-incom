### 补充知识
    $(this)  获取当前对象
    $(this).index()   获取当前对象的index索引号

    排他思想
    链式编程

    toFixed(num) 可把 Number 四舍五入为指定小数位数的数字。

### jQuery选择器
    1. $("选择器")   //里面选择器直接写CSS选择器即可，但是要加引号 
    2. 筛选选择器
        :first       获取第一个元素
        :last        获取最后一个元素
        :eq(index)   获取索引号为index的元素
        :odd         获取索引号为奇数的元素
        :even        获取索引号为偶数的元素

        :checked     选中的复选框

    3.筛选方法
        parent()               查找父级
        children(selector)     相当于$('ul>li')   最近一级(亲儿子)
        find(selector)         相当于$('ul li')   后代选择器
        siblings(selector)     查找兄弟节点  不包括自己本身
        eq(index)              相当于$('li:eq(2)')   更推荐eq(index)这种方式

        parents(selector)      查找祖先元素

### jQuery样式操作
#### 操作css方法
    1. $(this).css('color')
        参数只写属性名，则是返回属性值
    2. $(this).css('color','red')   $(this).css('width',300)
        参数是属性名、属性值， 逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号
    3. $(this).css({color:'red',fontSize:20})
        参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开，属性可以不用加引号，采用驼峰命名法
#### 设置类样式方法
    1. 添加类  $(this).addClass('current')
    2. 移除类  $(this).removeClass('current')
    3. 切换类  $(this).toggleClass('current')

### jQuery效果
    1. 显示与隐藏
        show()
        hide()
        toggle()
    2. 滑动
        slideDown()
        slideUp()
        slidToggle()
    3. 事件切换
        hover(over,out)   
        1. over:鼠标移到元素上要触发的函数(相当于mouseenter)
        2. out:鼠标移出元素要触发的函数(相当于mouseleave)
        3. 如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
    4. 动画队列及其停止排队方法
        (1). 动画或效果队列
            动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行
        (2). 停止排队 stop() 
            stop()方法用于停止动画或效果
            注意：stop()写到动画或者效果的前面，相当于停止结束上一次的动画
    5. 淡入淡出
        fadeIn()
        fadeOut()
        fadeToggle()
        fadeTo()
        思考：原生js如何实现淡入淡出？
    6. 自定义动画 
        animate(params,[speed],[easing],[fn])
            params: 想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采用驼峰命名法，如borderLeft

### jQuery属性操作
    1. 设置或获取元素固有属性值 prop()
    2. 设置或获取元素自定义属性值 attr()
        相当于原生js的 getAttribute()、setAttribute()
        该方法也能获取H5的自定义属性 如data-index
    3. 数据缓存 data()
        (1). data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构。
            一旦页面刷新，之前存放的数据都将被移除(相当于一个变量)
        (2). 这个方法获取data-index H5自定义属性 不用写data-  而且返回的是数字型

### jQuery文本属性值
    1. 获取/设置 普通元素内容 html()   [相当于innerHTML]
        $(this).html()
        $(this).html('内容')
    2. 获取/设置 普通元素文本内容 text()   [相当于原生innerText]
    3. 获取/设置 表单的值 val()   [相当于原生value]

### jquery元素操作
    1. 遍历元素
        (1) 语法1：【用于遍历节点】
            $(this).each(function(index,domEle){
                ...
            })
            -- index是每个元素的索引号；domEle是每个DOM元素对象，不是jquery对象
                所以要想使用jquery方法，需要给这个dom元素转换为jquery对象 $(domEle)
        (2) 语法2：【用于遍历数据对象】
            $.each(object,function(index,element){
                ...
            })
            --主要用于数据处理，比如数组、对象

    2. 创建元素
        例子： $('<div>创建元素</div>')

    3. 添加元素
        (1).内部添加元素 [生成之后，它们是父子关系]
            element.append("内容")   //添加到最后面,类似于原生js的appendChild
            element.prepend("内容")   //添加到最前面
        (2).外部添加元素 [生成之后，它们是兄弟关系]
            element.after("内容")   //添加到目标元素后面
            element.before("内容")  //添加到目标元素前面

    4. 删除元素
        element.remove()  //删除匹配的元素(本身)
        element.empty()   //删除匹配的元素集合中所有的子节点
        element.html('')  //清空匹配的元素内容

### jQuery尺寸、位置操作
    1. 盒子尺寸
        width() / height()    取得匹配元素宽度和高度值 只算width/height   
        innerWidth() / innerHeight()            包括 padding
        outerWidth() / outerHeight()            包括 padding + border
        outerWidth(true) / outerHeight(true)    包括padding + border + margin

      --以上参数为空，则是获取相应值，返回的是数字型
      --如果参数为数字(可以不写单位)，则是修改相应值,修改的是width/height

```
//原生JS实现淡入淡出
function fadeIn(element,speed){
    if(element.style.opacity !=1){
        var speed = speed || 30 ;
        var num = 0;
        var st = setInterval(function(){
        num++;
        element.style.opacity = num/10;
        if(num>=10)  {  clearInterval(st);  }
        },speed);
    }
}

function fadeOut(element){
    if(element.style.opacity !=0){
        var speed = speed || 30 ;
        var num = 10;
        var st = setInterval(function(){
        num--;
        element.style.opacity = num / 10 ;
        if(num<=0)  {   clearInterval(st);  }
        },speed);
    }
}
```
