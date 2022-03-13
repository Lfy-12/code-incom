function makePerson1(name){
  return{
    name
  };
}
let person = makePerson1("Matt");
console.log(person.name);

function makePerson2(a){
  return{
    name:a
  };
};
person = makePerson2("Matt");
console.log(person.name);