function Person(){};

console.log(typeof Person.prototype);
console.log(Person.prototype);
console.log(Person.prototype.__proto__);

console.log(Person.prototype.constructor === Person);

console.log(Object.prototype.__proto__);//null

console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Person.prototype.__proto__.constructor === Object);
console.log(Person.prototype.__proto__.__proto__ === null);

console.log(Person.prototype.__proto__);

let person1 = new Person(),
    person2 = new Person();

console.log(person1 !== Person);
console.log(person1 !== Person.prototype);
console.log(Person.prototype !==Person);

console.log(person1.__proto__ === Person.prototype);
console.log(person1.__proto__.constructor === Person);

console.log(person1.__proto__ === person2.__proto__);

console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
console.log(person1.__proto__ instanceof Object);

console.log(Object.__proto__);
console.log(Object.__proto__.__proto__);
console.log(Object.prototype);
