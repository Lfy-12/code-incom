let k1 = Symbol("k1"),
    k2 = Symbol("k2");

let o = {
  1:1,
  first:"first",
  [k1]:"sym2",
  third:"third",
  0:0
};

o[k2] = "sym1";
o[3] = 3;
o.second = "second";
o[2] = 2;

console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));

console.log(Object.keys(o));
for(key in o){
  console.log(key);
}