class Person{
  constructor(){
    this.flag = true;
  }
}

class Student extends Person{
  constructor(){
    super();
    console.log(this instanceof Person);
    console.log(this);
  }
}

let lfy = new Student();