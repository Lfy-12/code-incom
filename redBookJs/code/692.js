// 旧版IE会报错？
document.onclick = function(){
  var event = window.event;
  console.log('1');
  setTimeout(function(){
    console.log('2');
    event.returnValue = false;
  }, 1000);
}