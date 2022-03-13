const people = [
  {name:"Matt",age:27},{name:"Nicholas",age:29}
];
console.log(people.find((element,index,array) => element.age < 28));
console.log(people.findIndex((element,index,array) => element.age < 28));