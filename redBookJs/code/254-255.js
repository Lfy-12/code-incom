class Person{
  constructor(){
    this.locate = ()=>{console.log('instance');}
  }
  locate(){
    console.log('prototype');
  }
}

let p = new Person();
p.locate();

Person.prototype.locate();
p.__proto__.locate();