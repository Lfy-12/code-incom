function typedArrayConcat(typeArrayConstructor, ...typedArrays){
  const numElements = typedArrays.reduce((x,y) => ((x.length ||x) + y.length));
  const resultArray = new typeArrayConstructor(numElements);

  let currentOffset = 0;
  typedArrays.map(x => {
    resultArray.set(x,currentOffset);
    currentOffset += x.length;
  });

  return resultArray;
}

const concatArray = typedArrayConcat(Int32Array,Int8Array.of(1,2,3),Int16Array.of(4,5,6),Float32Array.of(7,8,9));
console.log(concatArray);
console.log(concatArray instanceof Int32Array);