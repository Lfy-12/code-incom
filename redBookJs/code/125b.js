let text = "cat, bat, sat, fat";
let result01 = text.replace("at","ond");
console.log(result01);

let result02 = text.replace(/at/g,"ond");
console.log(result02);