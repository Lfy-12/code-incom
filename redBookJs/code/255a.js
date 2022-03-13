const lfy = Symbol('symbolKey');

class Person{
  stringKey(){
    console.log('a');
  }
  [lfy](){
    console.log('b');
  }
  ['lfy'+'lt'](){
    console.log('c');
  }
}

let p = new Person();
p.stringKey();
p[lfy]();
p.lfylt();