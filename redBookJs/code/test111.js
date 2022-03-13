// Window.identity = 'Window';
function getIdentityFunc(){
  // identity = 'My Object';
  return ()=>{
    return this;//这个this是执行函数，也就是说他绑定的上下文是 getIdentityFunc
  }
}
console.log(getIdentityFunc()())//My Object
