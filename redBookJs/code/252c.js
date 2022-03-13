class Person{}

let p1 = new Person();
// TypeError
// p1.constructor();

// 使用对类构造函数的引用创建一个新实例
let p2 = new p1.constructor()