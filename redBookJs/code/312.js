window.identity = 'The Window';
let object = {
  identity: 'My Object',
  getIdentityFunc(){
    return function(){
      return this.identity;
    };
  }
};
// console.log(object.getIdentityFunc()());
// 等价于 ⬇

let a = object.getIdentityFunc(); //返回一个函数，赋值给a，此时this指向window
console.log( a() );