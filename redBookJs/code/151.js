let colors = ["red","green","blue"];

// 删除
let remove = colors.splice(0,1);
console.log(remove);
console.log(colors);

// 插入
remove = colors.splice(1,0,"yellow","orange");
console.log(remove);
console.log(colors);

// 替换
remove = colors.splice(1,1,"red","purple");
console.log(remove);
console.log(colors);
