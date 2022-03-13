function Person(){};

Person.prototype.name = "Nicholas";
Person.prototype.age = 28;
Person.prototype.job = "doctor";
Person.prototype.sayname = function(){
  console.log(this.name);
};

let keys = Object.keys(Person.prototype);
console.log(keys);

let person = new Person();
person.name = "Greg";
person.age = 18;
console.log(Object.keys(person));


let keys01 = Object.getOwnPropertyNames(Person.prototype);
console.log(keys01);

let key02 = Object.getOwnPropertyNames(person);
console.log(key02);





var A = [];
for(key in Person.prototype){
  A.push(key);
};
console.log(A);

var B = [];
for(key in person){
  B.push(key);
};
console.log(B);