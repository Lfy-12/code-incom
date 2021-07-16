function randomString() {
  var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = 10; i > 0; --i) 
    result += str[Math.floor(Math.random() * str.length)];
  return result;
}

function getObj(arr,_id){
  return arr.find( item => item.id ===  _id)
}