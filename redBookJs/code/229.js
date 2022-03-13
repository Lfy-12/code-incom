function Person(){};
Person.prototype.name = "Nich";

let person1 = new Person();
let person2 = new Person();

console.log(person1.hasOwnProperty("name"));

person1.name = "Greg";

console.log(person1.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));

console.log(person1.name);
console.log(person2.name);

delete person1.name;
console.log(person1.name);

console.log(person1.hasOwnProperty("name"));