function SuperType(){
  this.colors = ['red','grren','blue'];
};
function SubType(){};
SubType.prototype = new SuperType();

// 原型链上
let test1 = new SubType();
test1.colors.push('black');
console.log(test1.colors);
let test2 = new SubType();
console.log(test2.colors);

// 构造函数上
let test3 = new SuperType();
console.log(test3.colors);