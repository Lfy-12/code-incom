const o = {
  foo:'foo',
  baz:1,
  qux:{}
};
console.log(Object.values(o));
console.log(Object.entries(o));

const o1 ={
  qux:{}
};
console.log(Object.values(o1)[0] === o1.qux);
console.log(Object.entries(o1)[0][1] === o1.qux);

const sym = Symbol();
const o2 = {
  [sym] : 'foo'
};
console.log(Object.values(o2));
console.log(Object.entries(o2));
