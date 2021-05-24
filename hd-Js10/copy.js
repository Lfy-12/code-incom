// 后盾人 js第十章 P15 浅复制


// let a = {name:'lfy'};
// let b = a;
// b.name = 'ifly'
// console.log(a);
// console.log(b);

// let a = {name:'lfy'};
// let b = {name:a.name};
// b.name = 'ifly';
// console.log(a);
// console.log(b);

// let a = {name:'lfy',age:18};
// let b = {};
// for (const key in a) {
//     b[key] = a[key] + 'hhh'
// }
// console.log(b);

// // Object.assign() 改变此对象，不改变复制对象
// let a = {name:'lfy',age:18};
// let b = Object.assign({},a);
// b.name = 'ifly';
// console.log(a);
// console.log(b);
// console.log('----------');
// // Object.assign() 改变此对象，同时改变复制对象
// let x = {name:'lfy',age:18};
// let y = Object.assign(x);
// y.name = 'ifly';
// console.log(x);
// console.log(y);

// let a = {name:'lfy',age:18};
// let b = {...a};
// b.name = 'ifly';
// console.log(a);
// console.log(b);
