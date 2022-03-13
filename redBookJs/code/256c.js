class Person{
  sayName(){
    console.log(`${Person.greeting}${this.name}`);
  }
}

Person.greeting = 'My name is ';
Person.prototype.name = 'lfy';

let p = new Person();
p.sayName();