let personName,personAge;

let person = {
  name:"Matt",
  age:27
};

({name:personName,age:personAge} = person);

console.log(personName,personAge);