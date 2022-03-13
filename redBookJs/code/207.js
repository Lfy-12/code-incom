let person = {};
Object.defineProperty(person,"name",{
  configurable:false,
  value:"Nich"
});

console.log(person.name);
delete person.name;
person.name = "Greg";
console.log(person.name);

Object.defineProperty(person,"name",{
  configurable:true,
  value:"Nich"
})