class Person{
  set name(newName){
    this.name_ = newName;
  }
  get name(){
    return `${this.name_}hhhh`;
  }
}

let p = new Person();
console.log(p.name);
p.name = 'lfy';
console.log(p.name);