let dest,src,result;

dest = {};
src = {id:'src'};
result = Object.assign(dest,src);
console.log(dest === result);
console.log(src === dest);
console.log(dest);
console.log(result);

dest = {key:"val"};
result = Object.assign(dest, {a:"foo"},{b:"bar"});
console.log(result);

