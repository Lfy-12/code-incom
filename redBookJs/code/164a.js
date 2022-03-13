const m1 = new Map([
  ["key1","val1"],
  ["key2","val2"],
  ["key3","val3"]
]);
console.log(m1.size);

const m2 = new Map({
  [Symbol.iterator]:function*(){
    yield["key1","val1"];
    yield["key2","val2"];
    yield["key3","val3"];
  }
})
console.log(m2.size);

const m3 = new Map([[]]);
console.log(m3.has(undefined));
console.log(m3.get(undefined));
console.log(m3.size);