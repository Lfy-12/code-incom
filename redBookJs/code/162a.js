const container = new Int16Array(8);
container.set(Int8Array.of(1,2,3,4));
console.log(container);

container.set([5,6,7,8],4);
console.log(container);

container.set([5,6,7,8],7);