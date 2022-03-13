let person = {
  name:"Matt",
  age:27,
  job:{
    title:"SoftWare engineer"
  }
};

let {job: { title} } = person;

console.log(title);