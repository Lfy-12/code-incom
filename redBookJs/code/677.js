function testFinally(){
  try {
    return 1;
  } catch (error){
    return 2;
  } finally {
    return 3;
  }
}

console.log( testFinally() );


// 因为try块中只有return语句，不会发生错误
// 所以，函数看起来会输出1
// 但是，由于finally语句块是始终执行的
// 所以，最后输出的是 3 