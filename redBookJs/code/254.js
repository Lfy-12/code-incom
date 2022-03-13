class Person{
  constructor(){
    this.name = new String('lfy');
    this.sayName = ()=>{console.log(this.name);}
    this.nickNames = ['fy','littlefy']
  }
}

let p1 = new Person();
let p2 = new Person();

p1.sayName();
p2.sayName();

console.log(p1.name === p2.name);
console.log(p1.sayName === p2.sayName);
console.log(p1.nickNames === p2.nickNames);

p1.name = p1.nickNames[0];
p2.name = p2.nickNames[1];

p1.sayName();
p2.sayName();