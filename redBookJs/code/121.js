let stringValue = "hello world";
console.log(stringValue.slice(3));
console.log(stringValue.substring(3));
console.log(stringValue.substr(3));

console.log(stringValue.slice(3,7));
console.log(stringValue.slice(7,3));
console.log(stringValue.substring(3,7));
console.log(stringValue.substring(7,3));
console.log(stringValue.substr(3,7));

console.log('');

console.log(stringValue.slice(-3));
console.log(stringValue.slice(3,-3));
console.log(stringValue.slice(-3,-2));
console.log(stringValue.slice(-3,-6));//""(empty string)

console.log(stringValue.substr(-3));
console.log(stringValue.substr(3,-3));//""(empty string)

console.log(stringValue.substring(-3));
console.log(stringValue.substring(3,-3));

let A = [1,2,3,4,5];
console.log(A.slice(2,4));
// console.log(A.substring(2,4)); 
// console.log(A.substr(2,4)); 
// substr()和substring()是字符串方法，不适用于数组
