function SuperType(name){
  this.name = name;
}
function SubType(){
  SuperType.call(this,"Greg");
  this.age = 29;
}

let test = new SubType();
console.log(test.name);
console.log(test.age);