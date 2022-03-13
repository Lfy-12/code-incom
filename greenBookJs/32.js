class Person {
  constructor(name){
    this._name = name;
  }
  get name(){
    return this._name;
  }
  set name(value){
    this._name = value;
  }
}

let lotrchar = new Person('Frodo');
console.log(lotrchar.name);
lotrchar.name = 'Gandalf';
console.log(lotrchar.name);
lotrchar._name = 'Sam';
console.log(lotrchar.name);