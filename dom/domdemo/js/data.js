// 初始化data
function setData(item){
    // 查找ul节点中的文本输入框,往temp中添加value值
    if(item.querySelector('ul')){
        const v_item = item.querySelector('ul').querySelectorAll('.textInput');
        for(let i=0;i<v_item.length;i++){
            v_item[i].id = randomString();
            temp.value.push({id:v_item[i].id,title:v_item[i].value})
        }
    }
    data.push(temp);
    form_data.innerHTML = JSON.stringify(data);

    // 修改item中的标题
    const input = item.querySelector('input');
    input.addEventListener('blur',function(){
        if(this.value !== getObj(data,item.id).title){
            getObj(data,item.id).title = this.value;
            form_data.innerHTML = JSON.stringify(data);
        }
    })

    // 修改item中的选项的名称
    if(item.querySelector('ul')){
        const v_item = item.querySelector('ul').querySelectorAll('.textInput');
        let valueArr = getObj(data,item.id).value
        for(let i=0;i<v_item.length;i++){
            v_item[i].addEventListener('blur',function(){
                if(this.value !== getObj( valueArr ,v_item[i].id).title){
                    getObj( valueArr ,v_item[i].id).title = this.value;
                    form_data.innerHTML = JSON.stringify(data);
                }
            })
        }
    }
}

// 删除item
function deleteItemData(item){
    // 必须在里面获取item的索引值，因为数组中的删除操作会影响索引值
    let index = data.indexOf(getObj(data,item.id));
    data.splice(index,1);
    console.log(data);
    form_data.innerHTML = JSON.stringify(data);
}

// 增加item中的小list
function addListData(item){
    // 获取最新添加的节点中的input节点
    let input  = item.querySelector('ul').lastElementChild.querySelector('.textInput');
    input.id = randomString();
    // let valueArr = getObj(data,item.id).value
    getObj(data,item.id).value.push({id:input.id,title:input.value});
    form_data.innerHTML = JSON.stringify(data);
}

// 修改item中小list input框的值
function updateListDate(){
    
}