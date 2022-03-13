class Person{}

class Student extends Person{}

class Doctor extends Person{
  constructor(){
    super();
  }
}

class Teacher extends Person{
  constructor(){
    return {};
  }
}

console.log(new Student());
console.log(new Doctor());
console.log(new Teacher());