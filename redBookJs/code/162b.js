const source = Int16Array.of(2,4,6,8);

const fullCopy = source.subarray();
console.log(fullCopy);

const halfCopy = source.subarray(2);
console.log(halfCopy);

const partialCopy = source.subarray(1,3);
console.log(partialCopy);