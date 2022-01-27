// str.tirm() 去除字符串两边的空白
// 参考链接：https://www.cnblogs.com/rubylouvre/archive/2009/09/18/1568794.html

// String.prototype.trim = function () {
//     return this.replace(/^\s*/, '').replace(/\s*$/, '');
// }

// String.prototype.trim = function () {
//     return this.replace(/^\s+/, '').replace(/\s+$/, '')
// }

// String.prototype.trim = function () {
//     return this.substring( Math.max(this.search(/\S/), 0) , this.search(/\S\s*$/)+1 )
// }



let str = '  lf  y ';
console.log(str.trim());
