let count = 1;

const form = document.querySelector('.question');

// 性别
const sex_template = `
<span class='right-icon'>
    <img class="delete" src='img/delete.png'/>
    <img class="move" src='img/move.png'/>
</span>
<div class="title">
    <input type="text" class="textInput" value="性别"/>
</div>
<div>
    <div class="title"><input type="radio" class="radioInput" name="sex">男</div><br/>
    <div class="title"><input type="radio" class="radioInput" name="sex">女</div>
</div>
`
function sexFunc(){
    let countSpan = `<span class='count'>${count}</span>`;
    let sex_html = countSpan + sex_template;
    const item = document.createElement('div');
    item.innerHTML = sex_html;
    common(item);
}

// 单项填空
const onlyBlank_template = `
    <span class='right-icon'>
        <img class="delete" src='img/delete.png'/>
        <img class="move" src='img/move.png'/>
    </span>
    <div class="title">
        <input type="text"  class="textInput" value="请填写本项内容"/>
    </div>
    <div class="box"></div>`;
function onlyBlank(){
    let countSpan = `<span class='count'>${count}</span>`;
    let onlyBlank_html = countSpan + onlyBlank_template;
    const item = document.createElement('div');
    item.innerHTML = onlyBlank_html;
    common(item);
}

// 多项填空
const multiBlank_template = `
    <span class='right-icon'>
        <img class="delete" src='img/delete.png'/>
        <img class="move" src='img/move.png'/>
    </span>
    <div class="title">
        <input type="text" class="textInput" value="请填写以下内容"/>
    </div>
    <ul>
        <li class="option-list">
            <div class="option-item">
                <div class="title">
                    <input type="text" class="textInput" value="填空1"/>
                </div>
                <img class="delete2" src='img/delete2.png' />
            </div>
            <div class="box"></div>
        </li>
        <li class="option-list">
            <div class="option-item">
                <div class="title">
                    <input type="text" class="textInput" value="填空2"/>
                </div>
                <img class="delete2" src='img/delete2.png' />
            </div>
            <div class="box"></div>
        </li>
    </ul>
    <div class="btn-box">
        <button class="add-option-list">添加单个选项</button>
        <button>批量添加选项</button>
    </div>`;
function multiBlank(){
    let countSpan = `<span class='count'>${count}</span>`;
    let multiBlank_html = countSpan + multiBlank_template;
    const item = document.createElement('div');
    item.innerHTML = multiBlank_html;
    common(item);
}

// 所有按钮共有的功能函数
function common(item){
    item.className = 'item';
    form.appendChild(item);
    ++count;

    // 控制滚动条的滚动
    window.scrollTo(0,document.body.scrollHeight)

    // 添加item时相应的样式
    const items = form.querySelectorAll('.item')
    for(let i=0;i<items.length;i++){
        items[i].className = 'item'
    }
    item.className += ' item-active';
    // 清除title的title-active样式
    const titles = form.querySelectorAll('.title')
    for(let i=0;i<titles.length;i++){
        titles[i].className = 'title'
    }
    const itemtitle = item.querySelectorAll('.title');
    itemtitle[0].className += ' title-active';
    itemtitle[0].querySelector('input').select();
    // 清除底部按钮的样式，并显示当前item的底部按钮
    const btn_boxs = form.querySelectorAll('.btn-box');
    for(let i=0;i<btn_boxs.length;i++){
        btn_boxs[i].style.display = 'none'
    }
    const btn_box = item.querySelector('.btn-box');
    if(btn_box) btn_box.style.display = 'block';

    // 添加监听器：激活item样式
    // addEventListener第三个参数为true，处于捕获状态
    item.addEventListener('click',function(){
        const items = form.querySelectorAll('.item')
        for(let i=0;i<items.length;i++){
            items[i].className = 'item'
        }
        item.className += ' item-active';
        // 清除title的title-active样式
        const titles = form.querySelectorAll('.title')
        for(let i=0;i<titles.length;i++){
            titles[i].className = 'title';
        }
        // const item_radios = form.querySelectorAll('.radio');
        // for(let i=0;i<item_radios.length;i++){
        //     item_radios[i].style.backgroundColor = 'white';
        // }
    },true)

    // 添加监听器：删除item
    const deleteItem = item.querySelector('.delete');
    deleteItem.addEventListener('click',function(){
        form.removeChild(this.parentNode.parentNode);
        count = count-1;
        const countDiv = document.querySelectorAll('.count');
        for(let i=0;i<count;i++){
            countDiv[i].innerHTML = i+1;
        }
    })

    // 添加监听器：激活title样式
    for(let i=0;i<itemtitle.length;i++){
        itemtitle[i].addEventListener('click',function(){
            const titles = form.querySelectorAll('.title')
            for(let i=0;i<titles.length;i++){
                titles[i].className = 'title'
            }
            this.className += ' title-active';
            // 点击全选文本框的文字
            const textInput = this.querySelector('.textInput');
            if(textInput) textInput.select();
            const radioInput = this.querySelector('.radioInput');
            if(radioInput){
                var selection = window.getSelection();
                selection.removeAllRanges();
                var range = document.createRange();
                range.selectNodeContents(radioInput.nextSibling);
                selection.addRange(range);
            }
        },true)
    }

    item.addEventListener('click',function(){
        const btn_boxs = form.querySelectorAll('.btn-box');
        for(let i=0;i<btn_boxs.length;i++){
            btn_boxs[i].style.display = 'none';
        }
        if(btn_box) btn_box.style.display = 'block';
    })
}

// 部分按钮共有的功能函数————底部按钮
function bottomBtn(){
    
}
