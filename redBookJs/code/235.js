function Person(){};
Person.prototype = {
  name:'Greg',
  age:20,
  sayname(){
    console.log(this.name);
  }
};

Object.defineProperty(Person.prototype,"constructor",{
  enumerable:false,
  value:Person
});

friend = new Person();

console.log(friend.constructor);