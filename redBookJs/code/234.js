function Person(){};
Person.prototype = {
  name:"Greg",
  age:20,
  sayname(){
    console.log(this.name);
  }
};

let friend = new Person();
console.log(friend instanceof Person);
console.log(friend instanceof Object);

console.log(friend.constructor == Person);
console.log(friend.constructor == Object);