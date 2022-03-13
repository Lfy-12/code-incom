let text = "cat, bat, sat, fat";
let pattern = /.at/;

let matches = text.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);
