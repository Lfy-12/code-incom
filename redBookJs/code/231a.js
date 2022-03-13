function Person(){};

Person.prototype.name = "Nicholas";

let person1 = new Person();
let person2 = new Person();

console.log(person1.hasOwnProperty("name"));
console.log("name" in person1);

person1.name = "Greg";

console.log(person1.hasOwnProperty("name"));
console.log("name" in person1);


