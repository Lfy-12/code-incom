/*
  Array.prototype.flat() 特性总结:
    Array.prototype.flat() 用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
      不传参数时，默认“拉平”一层，可以传入一个整数，表示想要“拉平”的层数。
      传入 <=0 的整数将返回原数组，不“拉平”
      Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
      如果原数组有空位，Array.prototype.flat() 会跳过空位
*/


// // 简易版：直接拉平为一维数组
// function flat(arr) {
//   // // 【 concat + 递归 】
//   // let arrResult = [];
//   // arr.forEach(item => {
//   //   if (Array.isArray(item)) {
//   //     arrResult = arrResult.concat(arguments.callee(item));   // 递归
//   //     // 或者用扩展运算符
//   //     // arrResult.push(...arguments.callee(item));
//   //   } else {
//   //     arrResult.push(item);
//   //   }
//   // });
//   // return arrResult;

//   // 【reduce】
//   return arr.reduce((arrResult, cur) => {
//     return arrResult.concat( Array.isArray(cur) ? flat(cur) : cur );
//   }, [])
// }


// 【有参数】
// function flat(arr,num=1) {
//   if(num <= 0) return arr.slice()
//   return arr.reduce( (pre,cur) => {
//     return pre.concat( Array.isArray(cur) ? flat(cur,num-1) : cur)
//   },[])
// }


// const arr = [1,, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
// console.log( flat(arr,0) );




Array.prototype.fakeFlat = function(num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = this.concat();    // 获得调用 fakeFlat 函数的数组
  while (num > 0) {           
    if (arr.some(x => Array.isArray(x))) {
      arr = [].concat.apply([], arr);    // 数组中还有数组元素的话并且 num > 0，继续展开一层数组 
    } else {
      break; // 数组中没有数组元素并且不管 num 是否依旧大于 0，停止循环。
    }
    num--;
  }
  return arr;
};
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
console.log(arr.fakeFlat(Infinity));
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];



