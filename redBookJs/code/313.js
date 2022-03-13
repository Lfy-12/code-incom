window.identity = 'The Window';
let object = {
  identity:'My Object',
  getIdentityFunc(){
    let that = this;
    return function(){
      return that.identity;
    };
  }
};
console.log(object.getIdentityFunc()());
// 每个函数在被调用时都会自动创建两个特殊变量：this 和 arguments。内部函数永远不可能直接访问外部函数的这两个值。
// 所以可以将其引用先保存在闭包能访问的某个变量中