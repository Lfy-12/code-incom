let text = "this is been a short summer";
let pattern = /.hort/g;

if(pattern.test(text)){
  console.log(RegExp.input);
  console.log(RegExp.leftContext);
  console.log(RegExp.rightContext);
  console.log(RegExp.lastMatch);
  console.log(RegExp.lastParen);
}