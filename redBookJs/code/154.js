let values = [1,2,3,4,5];
let sum = values.reduce((prev,cur,index,array) => prev +cur,10);
console.log(sum);

let sum1 = values.reduceRight((prev,cur,index,array) => {return prev+cur},20)
console.log(sum1);