// 由于这个是移动端版本，不用考虑兼容性，所以结合js和css3效果更佳
// 利用 transform 进行切换, transition 完成过渡效果
// classList.remove  classList.add  进行样式类名的切换

window.addEventListener('load',function(){

    // 1.获取节点
    let focus = document.querySelector('.focus');
    let ul = focus.children[0];
    let ol = focus.children[1];

    // 2.注册全局变量
    let index = 0;
    let w = focus.offsetWidth;
    let startX,moveX;
    let flag = false;  //控制触发了touchmove才触发touchend

    // 3.定时器 轮播图自动播放
    let timer = setInterval(function(){
        index++;
        let translatex = -w*index
        ul.style.transition = 'all 0.3s'
        ul.style.transform = `translateX(${translatex}px)`
    },2000)

    // 4.等定时器的过渡完成之后 再去判断 完成轮播图的无缝连接
    ul.addEventListener('transitionend',function(){
        if(index >= 3){
            index = 0
            let translatex = -w*index
            ul.style.transition = 'none'   // 去掉过渡效果 使ul快速跳到目标位置 完成视觉上的无缝切换
            ul.style.transform = `translateX(${translatex}px)`
        }else if(index < 0){
            index = 2;
            let translatex = -w*index
            ul.style.transition = 'none'
            ul.style.transform = `translateX(${translatex}px)`
        }
        // 5. 小圆点跟随变化
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')
    })

    // 6. 手指滑动切换图片
    ul.addEventListener('touchstart',function(e){
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);  //手指触摸的时候就停止定时器
    })
    ul.addEventListener('touchmove',function(e){
        moveX = e.targetTouches[0].pageX - startX;
        let translatex = -w*index + moveX;
        ul.style.transition = 'none';
        ul.style.transform = `translateX(${translatex}px)`;
        flag = true;
        e.preventDefault();
    })
    ul.addEventListener('touchend',function(e){
        if(flag){
            flag = false;
            if(Math.abs(moveX) >= 100){  // 判断是否滑动切换图片
                index = moveX>0 ? --index : ++index;  // 判断是切换到上一张还是下一张
                let translatex = -w*index;
                ul.style.transition = 'all 0.3s';
                ul.style.transform = `translateX(${translatex}px)`;
            }else{
                let translatex = -w*index;
                ul.style.transition = 'all 0.1s';
                ul.style.transform = `translateX(${translatex}px)`;
            }
        }
        // 7. 重新开启定时器
        timer = setInterval(function(){
            index++;
            let translatex = -w*index + 'px'
            ul.style.transition = 'all 0.3s'
            ul.style.transform = `translateX(${translatex})`
        },2000)
    })
    
})