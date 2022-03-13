let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result);

let falseValue = false;
result = falseValue && true;
console.log(result);

console.log("");

console.log(typeof falseObject);
console.log(typeof falseValue);
console.log(falseObject instanceof Boolean);
console.log(falseValue instanceof Boolean);

