const key1 = {id:1},
      key2 = {id:2},
      key3 = {id:3};

const wm = new WeakMap().set(key1,"val1");

wm.set(key3,"val3")
  .set(key2,"val2");

console.log(wm.get(key1));
console.log(wm.get(key2));
console.log(wm.get(key3));
