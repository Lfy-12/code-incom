let text = "cat, bat, sat, fat";
result = text.replace(/(.at)/g,"word($1)");
console.log(result);