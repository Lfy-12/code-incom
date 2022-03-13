const buf = new ArrayBuffer(20);
const ints = new Int32Array(buf);
console.log(ints.length);
console.log(ints.buffer.byteLength);
console.log("");

const ints2 = new Int32Array(6);
console.log(ints2.length);
console.log(ints2.buffer.byteLength);
console.log("");

const ints3 = new Int32Array([2,4,6,8]);
console.log(ints3.length);
console.log(ints3.byteLength);
console.log(ints3[2]);
console.log("");

const ints4 = new Int16Array(ints3);
console.log(ints4.length);
console.log(ints4.buffer.byteLength);
console.log(ints4[2]);
console.log("");

const ints5 = Int16Array.from([3,5,7,9]);
console.log(ints5.length);
console.log(ints5.buffer.byteLength);
console.log(ints5[2]);
console.log("");

const floats = Float32Array.of(3.14,2.718,1.618);
console.log(floats.length);
console.log(floats.buffer.byteLength);
console.log(floats[2]);
