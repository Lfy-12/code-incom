class Person{
  constructor(){
    this.nicknames = ['lfy','fy','yy'];
  }

  // *[Symbol.iterator](){
  //   yield *this.nicknames.entries();
  // }

  [Symbol.iterator](){
    return this.nicknames.entries();
  }

}

let p = new Person();
for (let [idx,nickname] of p){
  console.log(idx,nickname);
}