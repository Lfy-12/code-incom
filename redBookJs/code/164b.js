const m = new Map();

console.log(m.has("firstName"));
console.log(m.has("lastName"));

m.set("firstName","Matt")
 .set("lastName","Tom");

console.log(m.has("firstName"));
console.log(m.get("firstName"));
console.log(m.size);

m.delete("firstName");

console.log(m.has("firstName"));
console.log(m.has("lastName"));
console.log(m.size);

m.clear();

console.log(m.has("firstName"));
console.log(m.has("lastName"));
console.log(m.size);
