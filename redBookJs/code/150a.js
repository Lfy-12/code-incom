let colors = ["red","green","blue"];
let newColors = ["black","brown"];
let moreNewColors = {
  [Symbol.isConcatSpreadable]:true,
  length:2,
  0:"pink",
  1:"cyan"
};

newColors[Symbol.isConcatSpreadable] = false;

let colors2 = colors.concat("yellow",newColors);

let colors3 = colors.concat(moreNewColors);

console.log(colors);
console.log(colors2);
console.log(colors3);