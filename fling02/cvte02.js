// 【二面】杨辉三角
function single(n) {
  let arr = [];
  for(let i = 0; i < n; i++) {
    arr[i] = new Array(i+1);
  }
  for(let i=0;i < n;i++) {
    for(let j = 0; j <= i; j++) {
      if(j == 0 || j == i) {
        arr[i][j] = 1;
      }else {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
      }
    }
  }
  console.log(arr);
}
single(6);