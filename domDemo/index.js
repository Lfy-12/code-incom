const form = document.getElementsByClassName('right')[0];
const div = document.getElementsByClassName('header')[0];
let i = 1;

function add(){
    const item = document.createElement('div')
    form.insertBefore(item,form.children[length-1]);
    item.innerHTML = '<h1>'+ i +'</h1>';
    ++i;
    console.log(i);
}