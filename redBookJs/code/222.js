function Person(){
  this.name = "Jake";
  this.sayName = function(){
    console.log(this.name);
  };
}

let person1 = new Person();
let person2 = new Person;

person1.sayName();
person2.sayName();

console.log(person1 instanceof Object);
console.log(person1 instanceof Person);

console.log(person2 instanceof Object);
console.log(person2 instanceof Person);