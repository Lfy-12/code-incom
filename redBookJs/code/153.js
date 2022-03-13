const evens = [2,4,6];
evens.find((element,index,array) => {
  console.log(element);
  console.log(index);
  console.log(array);
  return element === 4;
});