/* 牛客题目：https://www.nowcoder.com/profile/956403879/myFollowings/detail/21329710

以下代码执行后，array 的结果是？
let array = [,1,,2,,3];
array = array.map((i) => ++i)

*/

let array = [,1,,2,,3];


// array = array.map((i) => ++i);   //map()会跳过空位，但会保留这个值
// console.log(array);

array.forEach(item => console.log(item))
let a = array.every(item => item>2)   //forEach() every() some() filter  会跳过空位

let b = array.join('-');   //处理为空字符串
console.log(b);
let c = array[0].toString();  //报错
console.log(c);   








