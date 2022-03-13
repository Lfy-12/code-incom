const m1 = new Map([
  ["key1","val1"]
]);

for(let key of m1.keys()){
  key = "newKey";
  console.log(key);
  console.log(m1.get("key1"));
  console.log(m1.get("newKey"));
}

const keyObj = {id:1};
const m = new Map([
  [keyObj,"val1"]
]);

for(let key of m.keys()){
  key.id = "newKey";
  console.log(key);
  console.log(m.get(keyObj));
}
console.log(keyObj);