function* greet(){
  yield "how";
  yield "are";
  yield "you";
}

var greeter = greet();
console.log(greeter.next().value);
console.log(greeter.next().value);
console.log(greeter.next().value);
