const o1 = {};
// o1 = {}; //TypeError

const o2 = {name:"lfy"};
o2.name = "lt";
o2.age = 18;
console.log(o2);

const o3 = Object.freeze({})
o3.name = "lt";
console.log(o3.name);//undefined

const o4 = Object.freeze({name:"lfy"})
o4.name = "lt";
console.log(o4.name);//lfy