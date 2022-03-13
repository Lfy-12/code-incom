const ints = new Int16Array([1,2,3]);
const doub = ints.map(x => 2*x);
console.log(doub);
console.log(doub instanceof Int16Array);

for(const int of ints){
  console.log(int);
}
console.log(Math.max(...ints));