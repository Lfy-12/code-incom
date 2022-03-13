let ints,reset = () => ints = [0,1,2,3,4,5,6,7,8,9];
reset();

ints.copyWithin(6);
console.log(ints);
reset();

ints.copyWithin(0,5);
console.log(ints);
reset();

ints.copyWithin(4,0,3);
console.log(ints);
reset();

ints.copyWithin(2,0,6);
console.log(ints);
reset();

ints.copyWithin(-4,-7,-3);//(6,3,7)
console.log(ints);
reset();

ints.copyWithin(4,7,10);
console.log(ints);
reset();