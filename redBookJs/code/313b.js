window.identity = "The Window";
let object = {
  identity:'My Object',
  getIdentity(){
    // return this.identity;
    console.log(this.identity);
  }
};

object.getIdentity();
(object.getIdentity)();
(object.getIdentity = object.getIdentity)();
