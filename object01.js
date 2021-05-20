// 后盾人 js第十章 P20

// function User(name,age){
//     this.name = name;
//     this.age = age;
//     this.show = function (){
//         console.log(this.name + this.info());
//     }
//     this.info = function(){
//         return this.age > 50 ? '老年' : '青年';
//     }
// }
// let lfy = new User("llffyy",18);
// lfy.show()
// lfy.info = function(){return ''}
// lfy.show()
// lfy.name = 'lfylfy'
// lfy.show()

// 外部可以改变内部的值
// 封装

function User(name,age){
    let data = {name,age}
    let info = function(){
        return data.age > 50 ? '老年' : '青年';
    }
    this.show = function (){
        console.log(data.name + info());
    }
}
let lfy = new User("llffyy",18);
this.name = 'lfy'
lfy.show()
