// 【一面】
setTimeout(() => {
  console.log(1);
}, 0);
let promise = new Promise((resolve)=>{
  console.log(2);
  resolve();
}).then(()=>{
  console.log(3);
})
console.log(4);  // 2 4 3 1




var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false

function curryingCheck(reg){
  return function(str){
    console.log(reg.test(str));
  }
}




// 反转链表
function Link(val){
  this.node = val;
  this.next = null;
}
function reverse(){
  let current = this.head;
  let pre = null;
  let next = null;
  while(current){
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
}