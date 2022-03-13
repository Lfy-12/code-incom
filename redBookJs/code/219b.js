let person = {
  name:"Matt",
  age:27
};

let personName,personBar,personAge;

try{
  ({name:personName,foo:{bar:personBar},age:personAge} = person);
}catch(e){}

console.log(personName,personBar,personAge);