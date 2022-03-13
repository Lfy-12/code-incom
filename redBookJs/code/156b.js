const buf = new ArrayBuffer(16);

const fullDataView = new DataView(buf);
console.log(fullDataView.byteOffset);
console.log(fullDataView.byteLength);
console.log(fullDataView.buffer === buf);

const firstHalfView = new DataView(buf,0,8);
console.log(firstHalfView.byteOffset);
console.log(firstHalfView.byteLength);
console.log(firstHalfView.buffer === buf);

const secondHalfView = new DataView(buf,9);
console.log(secondHalfView.byteOffset);
console.log(secondHalfView.byteLength);
console.log(secondHalfView.buffer === buf);