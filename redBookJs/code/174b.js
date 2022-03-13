const s = new Set();

const functionValue = function(){};

s.add(functionValue);

console.log(s.has(functionValue));

console.log(s.has(function(){}));