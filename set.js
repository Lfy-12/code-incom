// 后盾人 js第十章 P26使用访问器保护数据
const user = {
    data:{name:'lfy',age:17},
    set age(value){
        console.log('seting...');
        if(typeof value != 'number' || value < 0 || value > 100){
            throw new Error('年龄格式错误');
        }
        this.data.age = value
    },
    get age(){
        console.log('getting...');
        return this.data.age + '岁';
    }
}
user.age = 22;
console.log(user.age);
