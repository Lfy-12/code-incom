let person1 = new Object();
person1.name = "Nicholas";
person1.age = 29;
person1.job = "Software Engineer";
person1.sayName = function(){
  console.log(this.name);
};

let person2 = {
  name:"Nicholas",
  age:29,
  job:"Software Engineer",
  sayName(){
    console.log(this.name);
  }
};