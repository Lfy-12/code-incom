class Vehicle{}

let FooMixin = (Superclass) => class extends Superclass{
  foo(){
    console.log('foo');
  }
};
let BarMixin = (Superclass) => class extends Superclass{
  bar(){
    console.log('bar');
  }
};
let BazMixin = (Superclass) => class extends Superclass{
  baz(){
    console.log('baz');
  }
}

// class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))){}

// 写一个辅助函数，把嵌套函数调用展开
function mix(BaseClass,...Mixins){
  return Mixins.reduce((accumulator,current)=>current(accumulator),BaseClass)
};
class Bus extends mix(Vehicle,FooMixin,BarMixin,BazMixin){}

let b = new Bus();
b.foo();
b.bar();
b.baz();