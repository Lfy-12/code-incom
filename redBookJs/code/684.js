function getQueryString(url){
  if(typeof url === 'string'){
    let pos = url.indexOf('?');
    if(pos > -1){
      return url.substring(pos+1);
    }
  }
  return '';
}
res = getQueryString('cdjni?xnis');
console.log(res);

// 所以getQueryString(url){} 应该对url类型进行限制
res = getQueryString([0,1]); 
console.log(res);