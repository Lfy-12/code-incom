const s = new Set();
console.log(s.has("Matt"));
console.log(s.size);

s.add("Matt")
 .add("Frisbie");

console.log(s.has("Matt"));
console.log(s.size);

s.delete("Matt");

console.log(s.has("Matt"));
console.log(s.has("Frisbie"));
console.log(s.size);

s.clear();

console.log(s.has("Matt"));
console.log(s.has("Frisbie"));
console.log(s.size);
