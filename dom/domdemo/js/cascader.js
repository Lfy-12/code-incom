let cascader_data = [
    { 
    name:"厂商1", 
    son:[ 
        { 
        name:"品牌一", 
        son:[{name:"型号1-1-1",son:[{name:"aaa"},{name:"1"}]},{name:"型号1-1-2",son:[{name:"sss"},{name:"2"}]}] 
        }, 
        { 
        name:"品牌二", 
        son:[{name:"型号1-2-1",son:[{name:"ddd"},{name:"3"}]},{name:"型号1-2-2",son:[{name:"fff"},{name:"4"}]}] 
        } 
        ] 
    },
    { 
        name:"厂商2", 
        son:[ 
            { 
            name:"2品牌一", 
            son:[{name:"型号2-1-1",son:[{name:"1"},{name:"11"}]},{name:"型号2-1-2",son:[{name:"2"},{name:"22"}]}] 
            }, 
            { 
            name:"2品牌二", 
            son:[{name:"型号2-2-1",son:[{name:"3"},{name:"33"}]},{name:"型号2-2-2",son:[{name:"4"},{name:"44"}]}] 
            } 
            ] 
        },
];
let temp_cascader_data = [];
const firstCount = 1;
// 多级下拉
const multiSelect_template = `
    <span class='right-icon'>
    <img class="delete" src='img/delete.png'/>
    <img class="move" src='img/move.png'/>
    </span>
    <div class="title">
    <input type="text" class="textInput" value="请选择以下选项"/>
    </div>
    <div class="cascader_box">
    <select class="cascader_item first">
        <option>请选择</option>
    </select>
    <select class="cascader_item second">
        <option>请选择</option>
    </select>
    <select class="cascader_item third">
        <option>请选择</option>
    </select>
    <select class="cascader_item forth">
        <option>请选择</option>
    </select>
    </div>
    <div class="btn-box">
    <button class="edit-option-list">编辑选项</button>
    <button>导入选项</button>
    </div>
    <div class="add-cascader-choose">
        <div class="add-header">
        <span>编辑选项</sp>
        <img class="close" src="img/close.png" alt="" srcset="">
        </div>
        <div class="add-content">
            <div class="cascader first">
                <div class="cascader-header">
                    一级选项
                </div>
                <div class="cascader-list">
                    <input type="text" value="请选择">
                </div>
                <button class="add-cascader">+添加按钮</button>
            </div>
            <div class="cascader second">
                <div class="cascader-header">
                    二级选项
                </div>
                <div class="cascader-list">
                    <input type="text" value="请选择">
                </div>
                <button class="add-cascader">+添加按钮</button>
            </div>
            <div class="cascader third">
                <div class="cascader-header">
                    三级选项
                </div>
                <div class="cascader-list">
                    <input type="text" value="请选择">
                </div>
                <button class="add-cascader">+添加按钮</button>
            </div>
            <div class="cascader forth">
                <div class="cascader-header">
                    四级选项
                </div>
                <div class="cascader-list">
                    <input type="text" value="请选择">
                </div>
                <button class="add-cascader">+添加按钮</button>
            </div>
        </div>
        <div class="cascader_btn">
            <button>取消</button>
            <button>保存</button>
        </div>
    
    </div>`
function multiSelect(){
    let countSpan = `<span class='count'>${count}</span>`;
    let multiSelect_html = countSpan + multiSelect_template;
    const item = document.createElement('div');
    item.innerHTML = multiSelect_html;
    common(item);

    const btn = item.querySelector('.edit-option-list');
    const addBox = item.querySelector('.add-cascader-choose');
    const bg = document.querySelector('.bg');
    const close = item.querySelector('.close');
    btn.addEventListener('click',function(){
        addBox.style.display = 'block';
        bg.style.display = 'block';
        // 清空
        temp_cascader_data = [];
    })
    close.addEventListener('click',function(){
        addBox.style.display = 'none';
        bg.style.display = 'none';
    })

    setCascaderData(item)

    const first = addBox.querySelector('.first');
    const second = addBox.querySelector('.second');
    const third = addBox.querySelector('.third');
    const forth = addBox.querySelector('.forth');

    const cascaderList = first.querySelector('.cascader-list');
    cascader_data.forEach((v,k)=>{
        cascaderList.innerHTML += `<input type="text" value="${v.name}">`
    })

    const firstBtn = first.querySelector('button');
    firstBtn.addEventListener('click',function(){
        const input_area = first.querySelector('.cascader-list');
        const input = document.createElement('input');
        input.value = `选项${++firstCount}`;
        element.setAttribute('index',randomString());
        temp_cascader_data.push({id:input.tabIndex,name:input.value});
    })

    
}

// 首页渲染级联选择框及其功能
function setCascaderData(item){
    const first = item.querySelector('.first');
    const second = item.querySelector('.second');
    const third = item.querySelector('.third');
    const forth = item.querySelector('.forth');

    // 初始化一级级联菜单
    cascader_data.forEach((v,k)=>{
        first.innerHTML += `<option value="${k+1}">${v.name}</option>`  
    })

    // 一级菜单的change事件,改变二级菜单的数据
    first.addEventListener('change',function(){
        objInit(second)
        objInit(third)
        objInit(forth)

        cascader_data.forEach((v,k)=>{
            if(first.selectedIndex == k+1){
                v.son.forEach((sv,sk)=>{
                    second.innerHTML += `<option value="${sk+1}">${sv.name}</option>`
                })

                // 二级
                second.addEventListener('change',function(){
                    objInit(third)
                    objInit(forth)

                    v.son.forEach((sv,sk)=>{
                        if(second.selectedIndex == sk+1){
                            sv.son.forEach((tv,tk)=>{
                                third.innerHTML += `<option value="${tk+1}">${tv.name}</option>`
                            })

                            // 三级
                            third.addEventListener('change',function(){
                                objInit(forth)
                                
                                sv.son.forEach((tv,tk)=>{
                                    if(third.selectedIndex == tk+1){
                                        tv.son.forEach((fv,fk)=>{
                                            forth.innerHTML += `<option value="${fk+1}">${fv.name}</option>`
                                        })
                                    }
                                })
                            })
                        }
                    })
                })
            }
        })      
    })

    
}
function objInit(obj){ 
   obj.innerHTML = '<option>请选择</option>'; 
}

function showCascader(){

}