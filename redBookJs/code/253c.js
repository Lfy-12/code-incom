class Person{}

let p1 = new Person();
console.log(p1.constructor === Person);
console.log(p1 instanceof Person);
console.log(p1 instanceof Person.constructor);
console.log('=======');

let p2 = new p1.constructor();
console.log(p2.constructor === Person);
console.log(p2 instanceof Person);
console.log(p2 instanceof Person.constructor);
console.log('=======');

let p3 = new Person.constructor();
console.log(p3.constructor === Person);
console.log(p3 instanceof Person);
console.log(p3 instanceof Person.constructor);
console.log('=======');
