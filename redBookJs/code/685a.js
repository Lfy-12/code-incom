// function reverseSort(values){
//   if(values){  //任何非数组值都会被转为true
//     values.sort();
//     values.reverse(); 
//     console.log(values);
//   }
// }

// function reverseSort(values){
//   if(values != null){  //只限制了null与undefined
//     values.sort();
//     values.reverse(); 
//     console.log(values);
//   }
// }

// function reverseSort(values){
//   // 若values不是数组值，那么即使values.sort存在，values.reverse也可能会报错
//   if(typeof values.sort === 'function'){  
//     values.sort();
//     values.reverse(); 
//     console.log(values);
//   }
// }

function reverseSort(values){
  if(values instanceof Array){  //正确做法，限制values为数组值
    values.sort();
    values.reverse(); 
    console.log(values);
  }
}







console.log(reverseSort('abc'));