function process(value){
  if(!(value instanceof Array)){
    throw new Error('process():arg must be an array')
  }
  value.sort();
  console.log(value);
}
process('abc');