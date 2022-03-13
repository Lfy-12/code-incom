const s = new Set();

const objVal = {},
      arrVal = [];

s.add(objVal)
 .add(arrVal);

objVal.bar = "bar";
arrVal.push("bar");

console.log(s.has(objVal));
console.log(s.has(arrVal));