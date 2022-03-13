// source：后盾人 第九章jsP6
for(let i=0;i<4;i++){
  setTimeout(function(){
    console.log(i);
  },1000)
}

for(var j=0;j<4;j++){
  setTimeout(function(){
    console.log(j);
  },1000)
}

