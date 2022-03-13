function resetParamterFunction2(x,y){
  var a = Array.prototype.slice.call(arguments,2);
  return (x+y)*a.length; 
};
console.log(resetParamterFunction2(1,2,'Hello',true,7));