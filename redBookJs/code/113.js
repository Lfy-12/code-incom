let text = "this is been a short summer";
let pattern = /(..)or(.)/g;

if(pattern.test(text)){
  console.log(RegExp.$1);
  console.log(RegExp.$2); 
}