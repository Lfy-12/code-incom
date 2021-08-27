var firstUniqChar = function(s) {
    if(s.length==0) return ' ';
    let arr = s.split('');
    let res = [];
    let abort = [];
    for(v of arr){
        // console.log(v);
        // console.log(res.indexOf(v));
        if( res.indexOf(v)==-1 && abort.indexOf(v)==-1 ){
            res.push(v)
        }else if(res.indexOf(v)!=-1){
            let xx = res.splice(res.indexOf(v),1)[0]
            if(abort.indexOf(xx)==-1){
                abort.push(xx)
            }
        }
        // console.log(res);
        // console.log(abort);
        // console.log('----');
    }
    if(res.length) return res[0];
    return ' '
}
let res = firstUniqChar("abaccdeff");
console.log(res);