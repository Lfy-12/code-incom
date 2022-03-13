function SuperType(){
  this.colors = ['red','green','blue'];
}
function SubType(){
  SuperType.call(this);
}

let test1 = new SubType();
test1.colors.push('black');
console.log(test1.colors);

let test2 = new SubType();
console.log(test2.colors);