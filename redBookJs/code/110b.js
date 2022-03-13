let text = "cat, bat, sat, fat";
let pattern = /.at/g;

let matches = pattern.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

console.log("");

matches = pattern.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

console.log("");

matches = pattern.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);