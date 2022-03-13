class Person{
  constructor(){
    if(new.target === Person){
      throw new Error('Person connot be directly instantiated')
    }
    if(!this.foo){
      throw new Error('Inheriting class must define foo()')
    }
    console.log('Success!!');
  }
}

class Teacher extends Person{
  foo(){}
}

class Student extends Person{}

new Teacher();
new Student();