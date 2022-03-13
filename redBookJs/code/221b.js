function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    console.log(this.name);
  };
}

let person1 = new Person("Nich",29,"Software Engineer");
let person2 = new Person("Greg",27,"Doctor");

person1.sayName();