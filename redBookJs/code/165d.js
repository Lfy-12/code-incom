const m = new Map();
const a = 0/"",
      b = 0/"",
      pz = +0,
      nz = -0;

console.log(a === b);
console.log(pz === nz);

m.set(a,"foo");
m.set(pz,"bar");

console.log(m.get(b));
console.log(m.get(nz));