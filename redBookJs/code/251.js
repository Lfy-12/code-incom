class Animal{}

class Person{
  constructor(){
    console.log('person ctor');
  }
}

class Vegetable{
  constructor(){
    this.color = 'orange';
  }
}

let a = new Animal();

let p = new Person();

let v = new Vegetable();
console.log(v.color);