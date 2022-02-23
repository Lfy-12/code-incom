// 实现call、apply、bind

Function.prototype.myCall = function (context) {
    // 判断调用对象
    if(typeof this != 'function') {
        console.error("type error");
    }
    // 获取参数
    let args = [...arguments].slice(1);
    // 判断context是否传入，如果未传入则设置为window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数
    let result = context.fn(...args);
    // 将属性删除
    delete context.fn;
    return result;
}
// let arr = [1,2,3]
// arr.concat.myCall([],1)

Function.prototype.myApply = function (context) {
    if(typeof this != 'function') {
        console.error("type error");
    }
    context = context || window;
    context.fn = this;
    let result = null;
    if(arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}

Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if(typeof this != 'function') {
        console.error("type error")
    }
    // 获取参数
    let args = [...arguments].slice(1);
    let fn = this;
    return function Fn() {
        // 根据调用方式，传入不同绑定值（需要判断函数作为构造函数的情况
        return fn.apply(
            this instanceof Fn ? this : context, 
            args.concat(...arguments)
          );
    }
}


let obj = {
    name: 'lfy',
    sayName: function(x,y) {
        console.log(this.name,x,y);
    }
};
let obj2 = {
    name: 'fy'
};

// obj.sayName.bind(obj2,1,2)();
// obj.sayName.myBind(obj2,1,2)();

// obj.sayName.myApply(obj2,[1,2]);
// obj.sayName.myCall(obj2,1,2);


// function A() {
//     this.name = 'x'
//     return this.name
// }
// const A1 = A.MyBind();
// console.log('A1', A1);
// const a2 = new A1()
// console.log('ressss', a2);