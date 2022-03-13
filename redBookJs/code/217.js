let person = {
  name:"Matt",
  age:27
};

let {name:personName,age:personAge} = person;

console.log(personName);
console.log(personAge);

let {name,age1,job,gender="men"} = person;
console.log(name);
console.log(age1);
console.log(job);
console.log(gender);

