const buf = new ArrayBuffer(2);
const view = new DataView(buf);

console.log(view.getInt8(0));
console.log(view.getInt8(1));
console.log(view.getInt16(0));

view.setUint8(0,255);
view.setUint8(1,0xFF);

console.log(view.getInt16(0));