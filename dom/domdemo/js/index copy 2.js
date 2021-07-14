let multi_blank_count = 2;
let only_choose_count = 2;
let multi_choose_count = 2;
let only_down_count = 2;
const btns = document.querySelector('.left').querySelectorAll('button');
for(let i=0;i<btns.length;i++){
     // 添加item表单项
     btns[i].addEventListener('click',function(){
        const item = document.createElement('div');
        item.className = 'item'
        item.innerHTML = `
        <span class='count'>${count}</span>
        <span class='right-icon'>
            <img class="delete" src='img/delete.png'/>
            <img class="move" src='img/move.png'/>
        </span>`
        switch(this.innerText) {
            case '性别':
                item.innerHTML += `
                <input class="title" value="${this.innerText}"/>
                <div class="radio">
                    <img class="circle" src="img/circle.png"/>
                    <input class="title" name="sex" value="男" />
                </div>
                <div class="radio">
                    <img class="circle" src="img/circle.png"/>
                    <input  class="title" name="sex" value="女" />
                </div>`;
               break;
            case '地理位置':
                item.innerHTML += `
                <input class="title" value="所在位置"/>
                <div class="position">
                    <img src="img/position.png"/>
                    <p>点击获取地理位置</p>
                </div>`;
               break;
            
            
            case '单项选择':
                item.innerHTML += `
                <input class="title" value="请选择一个选项"/>
                <ul>
                    <li class="option-list">
                        <div class="option-item">
                            <img class="circle" src="img/circle.png"/>
                            <input class="title" value="选择1"/>
                            <img class="delete2" src='img/delete2.png' />
                        </div>
                    </li>
                    <li class="option-list">
                        <div class="option-item">
                            <img class="circle" src="img/circle.png"/>
                            <input class="title" value="选择2"/>
                            <img class="delete2" src='img/delete2.png' />
                        </div>
                    </li>
                </ul>
                <div class="btn-box">
                    <button class="add-option-list">添加单个选项</button>
                    <button>批量添加选项</button>
                </div>
                `;
                break;
            case '多项选择':
                item.innerHTML += `
                <input class="title" value="请选择以下选项（多选）"/>
                <ul>
                    <li class="option-list">
                        <div class="option-item">
                            <img class="circle" src="img/square.png"/>
                            <input class="title" value="选项1"/>
                            <img class="delete2" src='img/delete2.png' />
                        </div>
                    </li>
                    <li class="option-list">
                        <div class="option-item">
                            <img class="circle" src="img/square.png"/>
                            <input class="title" value="选项2"/>
                            <img class="delete2" src='img/delete2.png' />
                        </div>
                    </li>
                </ul>
                <div class="btn-box">
                    <button class="add-option-list">添加单个选项</button>
                    <button>批量添加选项</button>
                </div>
                `;
                break;
            case '下拉选择':
                item.innerHTML += `
                <input class="title" value="请选择一个选项"/>
                <ul>
                    <li class="option-list">
                        <div class="option-item">
                            <img class="circle" src="img/down.png"/>
                            <input class="title" value="选项1"/>
                            <img class="delete2" src='img/delete2.png' />
                        </div>
                    </li>
                    <li class="option-list">
                        <div class="option-item">
                            <img class="circle" src="img/down.png"/>
                            <input class="title" value="选项2"/>
                            <img class="delete2" src='img/delete2.png' />
                        </div>
                    </li>
                </ul>
                <div class="btn-box">
                    <button class="add-option-list">添加单个选项</button>
                    <button>批量添加选项</button>
                </div>
                `;
                break;
            case '日期':
                item.innerHTML += `
                <input class="title" value="日期"/>
                <div class="box">
                    <img class="date" src="img/date.png"/>
                </div>`;
                break;
            default:
                item.innerHTML += `<input class="title" value="${this.innerText}"/>
                <div class="box"></div>`;
        }


        
        const radio = document.querySelectorAll('.radio')
        for(let i=0;i<radio.length;i++){
            radio[i].style.backgroundColor = 'white';

            radio[i].addEventListener('click',function(){
                this.style.backgroundColor = '#ebeef1';
            })
        }
        
        
        
        
      

        

        
       
        // 多项填空的事件监听器
        let optionItem = item.querySelectorAll('.option-item');
        let delete2 = item.querySelectorAll('.delete2');
        const ul = item.querySelector('ul');
        for(let i=0;i<optionItem.length;i++){
            optionItem[i].addEventListener('mouseover',function(){
                delete2[i].style.display = 'inline-block';
            })
            optionItem[i].addEventListener('mouseout',function(){
                delete2[i].style.display = 'none';
            })
            delete2[i].addEventListener('mouseover',function(){
                delete2[i].src = 'img/delete2-red.png';
            })
            delete2[i].addEventListener('mouseout',function(){
                delete2[i].src = 'img/delete2.png';
            })
            delete2[i].addEventListener('click',function(){
                ul.removeChild(this.parentNode.parentNode);
            })
        }

        // 多项填空添加单个选项
        const addBtn = item.querySelector('.add-option-list');
        if(addBtn){
            addBtn.addEventListener('click',function(){
            const li = document.createElement('li');
            li.className = 'option-list';
            switch(btns[i].innerText) {
                case '多项填空':
                    li.innerHTML = `
                    <div class="option-item">
                        <input class="title" value="填空${multi_blank_count+1}"/>
                        <img class="delete2" src='img/delete2.png' />
                    </div>
                    <div class="box"></div>`;
                    multi_blank_count++;
                    break;
                case '单项选择':
                    li.innerHTML = `
                    <div class="option-item">
                        <img class="circle" src="img/circle.png"/>
                        <input class="title" value="选择${only_choose_count+1}"/>
                        <img class="delete2" src='img/delete2.png' />
                    </div>`;
                    only_choose_count++;
                    break;
                case '多项选择':
                    li.innerHTML = `
                    <div class="option-item">
                        <img class="circle" src="img/square.png"/>
                        <input class="title" value="选项${only_down_count+1}"/>
                        <img class="delete2" src='img/delete2.png' />
                    </div>`;
                    only_down_count++;
                    break;
                case '下拉选择':
                    li.innerHTML = `
                    <div class="option-item">
                        <img class="circle" src="img/down.png"/>
                        <input class="title" value="选择${only_choose_count+1}"/>
                        <img class="delete2" src='img/delete2.png' />
                    </div>`;
                    only_choose_count++;
                    break;
            }
           
            ul.appendChild(li);

            const title = li.querySelector('.title');
            title.className += ' title-active';
            title.select();

            let optionItem = li.querySelector('.option-item');
            let delete2 = li.querySelector('.delete2');
            optionItem.addEventListener('mouseover',function(){
                delete2.style.display = 'inline-block';
            })
            optionItem.addEventListener('mouseout',function(){
                delete2.style.display = 'none';
            })
            delete2.addEventListener('mouseover',function(){
                delete2.src = 'img/delete2-red.png';
            })
            delete2.addEventListener('mouseout',function(){
                delete2.src = 'img/delete2.png';
            })
            delete2.addEventListener('click',function(){
                ul.removeChild(this.parentNode.parentNode);
            })

            const itemtitle = li.querySelector('input');
            itemtitle.addEventListener('click',function(){
                const titles = form.querySelectorAll('.title')
                for(let i=0;i<titles.length;i++){
                    titles[i].className = 'title'
                }
                this.className += ' title-active';
                this.select();
            })
        })}  
    })
}

