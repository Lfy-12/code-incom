const s1 = new Set(["val1"]);

for(let value of s1.values()){
  value = "newVal";
  console.log(value);
  console.log(s1.has("val1"));
  console.log(s1.has("newValue"));
}


const valObj = {id:1};
const s2 = new Set([valObj]);

for(let value of s2.values()){
  value.id = "newVal";
  console.log(value);
  console.log(s2.has(valObj));
}
console.log(valObj); 