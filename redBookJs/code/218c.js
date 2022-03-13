let person = {
  name:"Matt",
  age:27,
  job:{
    title:"SoftWare engineer"
  }
};

let personCopy = {};

({name:personCopy.name,age:personCopy.age,job:personCopy.job} = person);

person.job.title = "Hacker";

console.log(person);
console.log(personCopy);