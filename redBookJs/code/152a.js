let numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.lastIndexOf(4,4));


let person = {name:"Nich"};
let people = [{name:"Nich"}];
let morePeolpe = [person];

console.log(people[0] === person );//地址不一样
console.log(morePeolpe[0]===person);