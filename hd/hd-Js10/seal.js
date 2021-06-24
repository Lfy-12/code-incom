// 后盾人 js第十章 P24封闭对象的API设置
let user = {
    name:'lfy',
    age:17
};
Object.seal(user); // 不可以删除增加，不可以编辑特征
user.name = 'lt';
user.job = "student"; //×
delete age; //×
console.log(user);
console.log(Object.isSealed(user));
console.log(
    JSON.stringify(Object.getOwnPropertyDescriptors(user), null, 2)
    );