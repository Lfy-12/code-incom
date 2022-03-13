let person = {};
Object.defineProperty(person,"name",{
  writable:false,
  value:"Nich"
});

console.log(person.name);
person.name = "Greg";
console.log(person.name);
