let dest,src,result;

dest = {};
src = {
  a:"foo",
  get b(){
    throw new Error();
  },
  c:"bar"
};

try{
  Object.assign(dest,src);
}catch{}

console.log(dest);
