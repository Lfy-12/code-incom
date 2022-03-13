// function concat(str1,str2,str3){
//   let result = str1 + str2;
//   if(str3){
//     result += str3;
//   }
//   console.log(result);
// }
// concat('cat','dog',0); //此时0无法拼接 
// concat('cat','dog',1); //而1却可以拼接


function concat(str1,str2,str3){
  let result = str1 + str2;
  //应进行类型限制，str3存在且为字符串时才进行拼接
  if(typeof str3==='string'){  
    result += str3;
  }
  console.log(result);
}
concat('cat','dog','0');
concat('cat','dog',0);
