const buf = new ArrayBuffer(16);
console.log(buf.byteLength);

const buf2 = buf.slice(4,12);
console.log(buf2.byteLength);