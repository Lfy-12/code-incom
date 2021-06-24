// 后盾人 js第十章 P16 深复制多层次分析

// let a = {
//     name:'lfy',
//     bf:{
//         name:'lt'
//     }
// };
// let b = {
//     name: a.name,
//     bf: a.bf
// };
// console.log(JSON.stringify(b,null,2));
// b.name = 'ifly'
// b.bf.name = 'ltt';
// console.log(JSON.stringify(a,null,2));
// console.log(JSON.stringify(b,null,2));


// ⬆问题：a.bf 会随 b.bf 的改变而改变， 解决⬇


// let a = {
//     name:'lfy',
//     bf:{
//         name:'lt'
//     },
//     arr: []
// };
// function copy(x){
//     let res = {};
//     for (const key in x) {
//         res[key] = typeof(x[key]) === 'object' ? copy(x[key]) : x[key]
//     }
//     return res
// }
// let b = copy(a);
// b.bf.name = 'ltt';
// console.log(JSON.stringify(a,null,2));
// console.log(JSON.stringify(b,null,2));
// console.log(a);


// ⬆问题：a.arr为[] 复制后b.arr为{}, 解决⬇


let a = {
    name:'lfy',
    bf:{
        name:'lt'
    },
    arr: [],
    obj:{name:'ltt'}
};
// // 测试:保证数组和对象各自的索引一致
// let a = ['hhh','yyy']
// console.log(JSON.stringify(Object.entries(a),null,2));
// let b = {
//     name: 'hhh',
//     title: 'yyy'
// }
// console.log(JSON.stringify(Object.entries(b),null,2));
function copy(x){
    let res = x instanceof Array ? [] : {};
    for (const [k,v] of Object.entries(x)) { //数组解构
        res[k] = (typeof v === 'object') ? copy(v): v;
    }
    return res;
}
let b = copy(a);
b.arr.push('lfy')
console.log(JSON.stringify(a,null,2));
console.log(JSON.stringify(b,null,2));
