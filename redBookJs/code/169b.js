const wm = new WeakMap();

const key1 = {id:1},
      key2 = {id:2};

console.log(wm.has(key1));
console.log(wm.get(key2));

wm.set(key1,"val1")
  .set(key2,"val2");

console.log(wm.has(key1));
console.log(wm.get(key1));

wm.delete(key1);

console.log(wm.has(key1));
console.log(wm.has(key2));