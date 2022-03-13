class Person{
  constructor(){
    console.log(new.target);
    if(new.target === Person){
      throw new Error('Person cannot be directly instanciated')
    }
  }
}

class Student extends Person{}

console.log(new Student());
console.log(new Person());