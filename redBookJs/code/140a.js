function getArgsArray(){
  return Array.from(arguments);
}
console.log(getArgsArray(1,2,3,4));

const a1 = [1,2,3,4];
const a2 = Array.from(a1,x => x**2);
const a3 = Array.from(a1,function(x){return x**this.exponent},{exponent:3});
console.log(a2);
console.log(a3);