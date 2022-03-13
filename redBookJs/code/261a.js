class Person{
  constructor(job){
    this.name = 'lfy';
    this.age = 17;
    this.job = job;
  }
}

class Student extends Person{}

console.log(new Student('student'));