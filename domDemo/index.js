let count = 1;
const personInfoBtn = document.querySelector('.person-info').querySelectorAll('button');
const form = document.querySelector('.question');
for(let i=0;i<personInfoBtn.length;i++){
     // 添加item表单项
    personInfoBtn[i].addEventListener('click',function(){
        const item = document.createElement('div');
        item.className = 'item'
        item.innerHTML = `
        <span class='count'>${count}</span>
        <span>
            <img class="delete" src='delete.png'/>
            <img class="move" src='move.png'/>
        </span>
        <input value="${this.innerText}"/>`
        switch(this.innerText) {
            case '性别':
                item.innerHTML += `
                <input type="radio" name="sex" value="男" />男
                <input type="radio" name="sex" value="女" />女`;
               break;
            default:
                item.innerHTML += `<div></div>`;
        }

        form.appendChild(item);
        ++count;

        // 激活title样式
        const title = item.querySelector('input')
        title.addEventListener('mouseover',function(){
            this.style.border = '1px grey dashed'
        })
        title.addEventListener('mouseout',function(){
            this.style.border = '1px white dashed'
        })
        title.addEventListener('click',function(){
            const titles = document.querySelector('.question').querySelectorAll('input')
            for(let i=0;i<titles.length;i++){
                titles[i].className = ''
            }
            this.className ='title-active';
            this.select();
        })
       
        // 激活item样式
        // addEventListener第三个参数为true，处于捕获状态
        item.addEventListener('click',function(){
            const items = document.querySelector('.question').querySelectorAll('.item')
            for(let i=0;i<items.length;i++){
                items[i].className = 'item'
            }
            this.className += ' item-active';
            // 清除title的title-active样式
            const titles = document.querySelector('.question').querySelectorAll('input')
            for(let i=0;i<titles.length;i++){
                titles[i].className = ''
            }
        },true)

        // const move = item.querySelector('.move');
        // move.addEventListener('mousedown',function(e){
        //     // let innerY = e.pageY - item.offsetTop
        //     let med = e.pageY
        // //    console.log(item.offsetTop);
        //     document.addEventListener('mousemove',move)
        //     document.addEventListener('mouseup',function(){
        //         document.removeEventListener('mousemove',move)
        //     })
        //     function move(e){
        //         y = e.pageY - med;
        //         item.style.top = y + 'px';
        //         // console.log(item.offsetTop);
        //     }
        // })

        const deleteItem = item.querySelector('.delete');
        deleteItem.addEventListener('click',function(){
            form.removeChild(this.parentNode.parentNode)
        })

       
    })
}




