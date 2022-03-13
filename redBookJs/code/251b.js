class Person{
  constructor(name){
    console.log(arguments.length);
    this.name = name || null;
  }
}

let a = new Person;
console.log(a.name);

let b = new Person();
console.log(b.name);

let c = new Person('lfy');
console.log(c.name);