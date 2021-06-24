// 后盾人 js第十章 P25冻结对象API特性

"use strict"
let user = {
    name:'lfy',
    age:17
}
console.log(JSON.stringify(
    Object.getOwnPropertyDescriptor(user,'name'),null,2
));

Object.freeze(user);

console.log(JSON.stringify(
    Object.getOwnPropertyDescriptors(user),null,2
));

user.name = 'lt'