class SuperArray extends Array{
  shuffle(){
    for(let i=this.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [this[i],this[j]] = [this[j],this[i]];
    }
  }
}

let a = new SuperArray(1,2,3,4,5);

console.log(a instanceof Array);
console.log(a instanceof SuperArray);
console.log(a);
a.shuffle();
console.log(a);