function Person(){};
Person.prototype = {
  constructor: Person,
  name: "Greg",
  friends: ["boy","girl"]
};

let person1 = new Person();
let person2 = new Person();

person1.friends.push("Van");
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);