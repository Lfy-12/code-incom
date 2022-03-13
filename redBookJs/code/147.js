// push
let colors = new Array();
let count = colors.push("red","green");
console.log(count);

count = colors.push("black");
console.log(count);

// pop
let item = colors.pop();
console.log(item);
console.log(colors.length);

// shift
item = colors.shift();
console.log(item);
console.log(colors.length);

console.log(colors);

// unshift
count = colors.unshift("red","yellow");
console.log(count);
console.log(colors);