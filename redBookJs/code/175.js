const s = new Set(["val1","val2","val3"]);
console.log(s.values === s[Symbol.iterator]);
console.log(s.keys === s[Symbol.iterator]);
for(let key of s.keys()){
  console.log(key);
}
for(let value of s[Symbol.iterator]()){
  console.log(value);
}

console.log([...s]);

for(let pair of s.entries()){
  console.log(pair);
}

s.forEach((val,dupVal) => console.log(`${val} -> ${dupVal}`));