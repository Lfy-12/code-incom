/* 牛客题目：https://www.nowcoder.com/profile/956403879/myFollowings/detail/20335994

以下代码执行后，a.x 和 b.x 的结果分别是？                             
 function A(x){
this.x = x;
}
A.prototype.x = 1;

function B(x){
this.x = x;
}
B.prototype = new A();
var a = new A(2), b = new B(3);
delete b.x;

*/