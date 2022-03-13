let Person = class PersonName{
  identify(){
    console.log(Person.name,PersonName.name);
  }
}

let p = new Person();

p.identify();

console.log(Person.name); 
console.log(PersonName);