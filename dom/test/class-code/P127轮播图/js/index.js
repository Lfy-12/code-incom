window.addEventListener('load',function(){

    // 1.获取元素
    let focus = document.querySelector('.focus');
    let ul = focus.querySelector('ul');
    let ol = focus.querySelector('.circle');
    let arrowL = document.querySelector('.arrow-l');
    let arrowR = document.querySelector('.arrow-r');
    let focusWidth = focus.offsetWidth;

    // 点击左/右按钮,图片滚动一张
    let num = 0;
    // circle控制小圆圈的播放
    let circle = 0;
    // flag 节流阀
    let flag = true;

    // 2.【初始化li】根据图片个数动态生成li小圆圈
    for(let i=0;i<ul.children.length;i++){
        let li = document.createElement('li');
        // 设置li的属性index，记录当前小圆圈的索引号，方便li的点击事件
        li.setAttribute('index',i);
        ol.appendChild(li);
        
        li.addEventListener('click',function(){
            for(let i=0;i<ol.children.length;i++){
                ol.children[i].className = ''
            }
            this.className = 'current';
            let index = li.getAttribute('index');
            // 调用缓动动画函数
            animation(ul, -focusWidth*index);

            // 当我们点击了某个小li 就要把这个li 的索引号给 num  / circle
            num = index;
            circle = index;
        })
    }
    // 初始化  把ol里面的第一个小li设置类名为 current
    ol.children[0].className = 'current';

    // 3.动态克隆第一张图片(li)放到ul后面
    let clone_li = ul.children[0].cloneNode(true);
    ul.appendChild(clone_li);

    
    // 4.【左侧按钮】--需实现图片与小圆圈的同时切换
    arrowL.addEventListener('click',function(){
        if(flag){
            flag = false;
            // 当轮播图位于第一张时，在进行左移前 瞬移到最后一张(与它相同的一张图片)
            if(num === 0){
                num = ul.children.length - 1;
                ul.style.left = -focusWidth*num + 'px';
            }
            num--;
            animation(ul, -focusWidth*num, ()=> flag=true);

            circle--;
            if(circle < 0) circle = ol.children.length - 1;
            circleChange();
        }
        
    })
    // 5.【右侧按钮】
    arrowR.addEventListener('click',function(){
        if(flag){
            flag = false;
            // 当轮播图位于最后一张时,在进行右移前 瞬移到第一张(与它相同的一张图片)
            if(num === ul.children.length -1) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            animation(ul, -focusWidth*num,()=> flag=true);

            circle++;
            if(circle > ol.children.length - 1) circle = 0;
            circleChange();
            }
    })

    function circleChange(){
        // 先清除其余小圆圈的current类名
        for(let i=0;i<ol.children.length;i++){
            ol.children[i].className = ''
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }

    // 6.自动播放轮播图
    var timer = setInterval(function(){
        //手动调用右侧按钮点击事件
        arrowR.click();
    },2000)

    // 鼠标经过 暂停自动播放
    focus.addEventListener('mouseenter',function(){
        clearInterval(timer);
        timer = null;
    })
    // 鼠标离开 开启自动播放
    focus.addEventListener('mouseleave',function(){
        timer = setInterval(function(){
            arrowR.click();
        },2000);
    })
})



