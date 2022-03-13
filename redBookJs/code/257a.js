class Person{
  *createNicknameIterator(){
    yield 'Jack';
    yield 'Jake';
    yield 'J-Dog';
  }
  static *createJobIterator(){
    yield 'Butcher';
    yield 'Baker';
    yield 'Candlestick maker';
  }
}

let jobIter = Person.createJobIterator();
console.log(jobIter.next().value);
console.log(jobIter.next().value);
console.log(jobIter.next().value);

let p = new Person();
let nickname = p.createNicknameIterator();
console.log(nickname.next().value);
console.log(nickname.next().value);
console.log(nickname.next().value);
