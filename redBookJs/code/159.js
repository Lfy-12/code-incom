const buf = new ArrayBuffer(1);
const view = new DataView(buf);

view.setInt8(0,3.9);
console.log(view.getInt8(0));

view.setInt8(0,[4.9]);
console.log(view.getInt8(0));

view.setInt8(0,'f');
console.log(view.getInt8(0));

view.setInt8(0,Symbol());