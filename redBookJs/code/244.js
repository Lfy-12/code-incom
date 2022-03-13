function SuperType(name){
  this.name = name;
  this.colors = ["red","green","blue"];
}
SuperType.prototype.sayName = function(){
  console.log(this.name);
};
function SubType(name,age){
  // 继承属性
  SuperType.call(this,name);
  this.age = age;
}
// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
  console.log(this.age);
};

let test1 = new SubType("Greg",27);
test1.colors.push('black');
console.log(test1.colors);
test1.sayName();
test1.sayAge();

let test2 = new SubType("Nich",20);
console.log(test2.colors);
test2.sayAge();
test2.sayName();


