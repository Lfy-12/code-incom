function SuperType(){
  this.property = true;
};
SuperType.prototype.getSuperValue = function(){
  return this.property;
};

function SubType(){
  this.subProperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function(){
  return this.subProperty;
};

let test = new SubType();
console.log(test.getSuperValue());
console.log(test.constructor);


// instanceof操作符
console.log(test instanceof SubType);
console.log(test instanceof SuperType);
console.log(test instanceof Object);

// isPrototypeOf()
console.log(Object.prototype.isPrototypeOf(test));
console.log(SuperType.prototype.isPrototypeOf(test));
console.log(SubType.prototype.isPrototypeOf(test));

