let book = {};

Object.defineProperties(book,{
  year_:{
    value:2017
  },

  edition:{
    value:1
  },

  year:{
    get(){
      return this.year_;
    },
    set(newValue){
      if(newValue > 2017){
        this.year_ = newValue;
        this.edition += newValue - 2017;
      }
    }
  }
});

let descriptor = Object.getOwnPropertyDescriptor(book,"year_");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get)

let descriptor2 = Object.getOwnPropertyDescriptor(book,"year");
console.log(descriptor2.value);
console.log(descriptor2.configurable);
console.log(typeof descriptor2.get)