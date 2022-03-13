// source：后盾人 第九章jsP8
let arr=[];
for(let i=0;i<4;i++){
  arr.push(function(){
    return i;
  });
}
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]());//保留了块级作用域中的i
console.log("------");

let arr02=[];
for(var y=0;y<4;y++){
  arr02.push(function(){
    return y;
  });
}
console.log(arr02[0]());
console.log(arr02[1]());//y是全局的y
console.log("------");

// 如何用var保留块级作用域中的z？
let arr03=[];
for(var z=0;z<4;z++){
  (function(z){
    arr03.push(function(){
      return z;
    });
  })(z)
  
}
console.log(arr03[0]());
console.log(arr03[1]());
