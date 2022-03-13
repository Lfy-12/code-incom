function addTen(num){
  num += 10;
  return num;
}
let count = 10;
result = addTen(count);
console.log("count="+count+",result="+result);


function setName(obj){
  obj.name = "lfy";
}
let person = new Object();
setName(person);
console.log(person.name);


function setName1(obj){
  obj.name = "lfy";
  obj = new Object();
  obj.name = "yfl";
}
let person1 = new Object();
setName1(person1);
console.log(person1.name);

// ECMAScript中所有函数的参数都是按值传递