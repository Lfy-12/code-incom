function hasPrototypeProperty(object,name){
  return (name in object) && (!object.hasOwnProperty(name));
};

function Person(){};
Person.prototype.name = "Nicholas";

let person = new Person();

console.log(hasPrototypeProperty(person,"name"));

person.name = "Greg";

console.log(hasPrototypeProperty(person,"name"));
