const nameKey = "name";
const ageKey = "age";
const jobKey = "job";
let uniqueToken = 0;

function getUniqueKey(key){
  return `${key}_${uniqueToken++}`;
}

let person = {
  [getUniqueKey(nameKey)]:"Matt",
  [getUniqueKey(ageKey)]:27,
  [getUniqueKey(jobKey)]:"Software engineer"
};

console.log(person);