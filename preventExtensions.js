
const user = {
    name:'lfy',
    age:18
};

// console.log(Object.getOwnPropertyDescriptor(user,'name'));
// console.log(Object.getOwnPropertyDescriptors(user));

Object.defineProperty(user,"job",{
    value:"student",
    writable:false
})
console.log(user);
user.job = "worker"  //在严格模式下会报错
console.log(user);

// 后盾人 js第十章 P23 不允许向对象添加属性api

// // Object.preventExtensions(user);
// if(Object.isExtensible(user)){
//     user.site = 'lfy.com'
//     console.log(user);
// }