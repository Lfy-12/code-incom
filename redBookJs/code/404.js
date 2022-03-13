
const body = document.querySelector('body')
console.log(body.childNodes);
console.log(Array.isArray(body.childNodes));

// 转为数组
let arrayOfNodes = Array.prototype.slice.call(body.childNodes,0);
console.log(arrayOfNodes);

let arrayOfNodes02 = Array.from(body.childNodes);
console.log(arrayOfNodes02);



console.log(body.ownerDocument);

let script = body.childNodes[body.childNodes.length-1];
console.log(script);
console.log(script.hasChildNodes());

