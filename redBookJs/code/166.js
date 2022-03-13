const m = new Map([
  ["key1","val1"],
  ["key2","val2"],
  ["key3","val3"]
]);

console.log(m.entries === m[Symbol.iterator]);

for(const entrie of m.entries()){
  console.log(entrie);
}

for(let entrie of m.entries()){
  console.log(entrie);
}

console.log([...m]);