function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    console.log(this.name);
  };
}

let person = new Person("Nich",29,"Software");
person.sayName();

Person("Greg",27,"Doctor");
window.sayName();

let o = new Object();
Person.call(o,"Kristen",25,"Nurse");
o.sayName();