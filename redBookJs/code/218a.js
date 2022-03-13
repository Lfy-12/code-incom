let {length} = "foobar";
console.log(length);

// ???
let {a} = "foobar";
console.log(a);

let {constructor:c} = 4;
console.log(c === Number);

let {_} = null;
