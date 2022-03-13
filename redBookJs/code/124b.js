let message = "abc";
let stringIterator = message[Symbol.iterator]();
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());

for(const c of message){
  console.log(c);
}

console.log([...message]);