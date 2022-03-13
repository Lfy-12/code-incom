function Person(){};
let friend = new Person();
Person.prototype = {
  name:"Greg",
  age:20,
  sayname(){
    console.log(this.name);
  }
};

console.log(friend.name);
friend.sayname();