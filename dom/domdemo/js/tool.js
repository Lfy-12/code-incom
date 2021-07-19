// 生成随机字符串
function randomString() {
  var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = 10; i > 0; --i) 
    result += str[Math.floor(Math.random() * str.length)];
  return result;
}

// 根据id查找数组对象
function getObj(arr,_id){
  return arr.find( item => item.id ===  _id)
}