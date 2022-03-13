// source：后盾人 第九章jsP3

// function hd(){
//   let n = 1;
//   function sum(){
//     console.log(++n);
//   }
//   sum();
// }
// hd();
// hd();

// 如何实现调用一次函数就累加n

// function hd(){
//   let n = 1;
//   return function(){
//     console.log(++n);
//   }
// }
// let a = hd();
// a();
// a();
// let b = hd();
// b();

// 升级

// function hd(){
//   let n = 1;
//   return function(){
//     let m = 1;
//     function show(){
//       console.log(++m);
//     }
//     show();
//   }
// }
// // 输出什么？
// let a = hd();
// a();
// a();

// 如何实现累加呢

function hd(){
  let n = 1;
  return function(){
    let m = 1;
    return function show(){
      console.log('m' + ++m);
      // 这种情况下，n也被保留了
      console.log('n' + ++n);
    }
  }
}
let a = hd()();
a();
a();

// 函数作用域，用完就删，但当外部一直引用的时候，就会一直保留
