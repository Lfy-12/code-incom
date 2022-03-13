function Person(){};

Person.prototype.name = "Nich";
Person.prototype.sayName = function(){
  console.log(this.name);
}

let person1 = new Person();
let person2 = new Person();
person1.sayName();
person2.sayName();

console.log(person1.sayName() === person2.sayName());