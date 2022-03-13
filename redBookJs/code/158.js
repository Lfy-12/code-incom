const buf = new ArrayBuffer(2);
const view = new DataView(buf);

view.setUint8(0,0x80);
view.setUint8(1,0x01);

console.log(view.getUint16(0));
console.log(view.getUint16(0,true));

view.setUint16(0,0x0004);
console.log(view.getUint8(0));
console.log(view.getUint8(1));

view.setUint16(0,0x0002,true);

console.log(view.getUint8(0));
console.log(view.getUint8(1));
