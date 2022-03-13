class Person{
  constructor(){
    this.locate = ()=>{console.log('instance',this);}
  }
  locate(){
    console.log('prototype',this);
  }
  static locate(){
    console.log('class',this);
  }
}

let p = new Person();
p.locate();
Person.prototype.locate();
Person.locate();