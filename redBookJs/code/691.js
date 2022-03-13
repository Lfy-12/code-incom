// function divide(num1,num2){
//   console.log(num1/num2); 
// }

// function divide(num1,num2){
//   if(typeof num1 != 'number' || typeof num1 != 'number'){
//     throw new Error('divide():Both args must be number')
//   }
//   console.log(num1/num2);
// }

// condition条件为false时，抛出错误
function assert(condition,message){
  if(!condition){
    throw new Error(message);
  }
}

function divide(num1,num2){
  assert(typeof num1 == 'number' && typeof num1 == 'number','divide():Both args must be number')
  console.log(num1/num2);
}


// 运行divide函数
divide('a',1)