console.log(Int16Array.BYTES_PER_ELEMENT);
console.log(Int32Array.BYTES_PER_ELEMENT);

const ints = new Int32Array(1), floats = new Float64Array(1);
console.log(ints.BYTES_PER_ELEMENT);
console.log(floats.BYTES_PER_ELEMENT);

const ints1 = new Int32Array(4);
console.log(ints1[0]);
console.log(ints1[1]);
console.log(ints1[2]);
console.log(ints1[3]);
