class Person{
  constructor(override){
    this.foo = 'foo';
    if(override){
      return{
        bar:'bar'
      };
    }
  }
}
let p1 = new Person();
let p2 = new Person(true);

console.log(p1);
console.log(p1 instanceof Person);

console.log(p2);
console.log(p2 instanceof Person);