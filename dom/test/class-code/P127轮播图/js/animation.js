// 缓动动画函数
// obj移动对象  target目标位置  callback回调函数
function animation(obj,target,callback){

    // 清除之前的定时器，防止定时器叠加，导致速度加快
    clearInterval(obj.timer)

    obj.timer = setInterval(()=>{

        // 停止动画 即停止定时器，并调用回调函数
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            callback && callback();
        }

        // 缓动动画 核心算法：(目标值 - 现在的位置)/10 做为每次移动的距离 步长
        let step = (target - obj.offsetLeft) / 10;
        // 进行步长处理，使obj精准降落在target上(结合obj.offsetLeft == target)
        step = step>0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + 'px';
    },15)
}