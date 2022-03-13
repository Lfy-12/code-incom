function sum(x,y,z){
  return x+y+z;
};
let params = [3,4,5];
console.log(sum(...params))

function restparamterFunction(x,y,...a){
  return (x+y)*a.length;
};
console.log(restparamterFunction(1,2,'hello',true,7));

// ？
function resetParamterFunction2(x,y){
  var a = Array.prototype.slice.call(arguments,2);
  return (x+y)*a.length; 
};
console.log(resetParamterFunction2(1,2,'Hello',true,7));
