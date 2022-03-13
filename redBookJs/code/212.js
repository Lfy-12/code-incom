let dest,src,result;

dest = {id:"dest"};
result = Object.assign(dest,{id:"src1",a:"foo"},{id:"src2",b:"bar"});
console.log(result);

dest = {
  set id(x){
    console.log(x);
  }
};
Object.assign(dest,{id:"first"},{id:"second"});

dest = {};
src = {a:{}};
Object.assign(dest,src);

console.log(dest);
console.log(dest.a === src.a);