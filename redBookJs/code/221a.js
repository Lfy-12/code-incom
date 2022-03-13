function createPerson(name,age,job){
  let o = new Object();
  o.name = name; 
  o.age  = age;
  o.job = job;
  o.sayName  = function(){
    console.log(this.name);
  }
  return o;
}

let person1 = createPerson("Nich",29,"SoftWare Engineer").sayName();
let person2 = createPerson("Greg",27,"Doctor");