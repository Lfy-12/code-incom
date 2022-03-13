let arr1 = [1,2,3];

let typeArr1 = Int16Array.of(...arr1);
let typeArr2 = Int16Array.from(arr1);
console.log(typeArr1);
console.log(typeArr2);

let map = new Map(arr1.map((x) => [x,"val"+x]));
console.log(map);

let set = new Set(typeArr1);
console.log(set);

let arr2 = [...set];
console.log(arr2);