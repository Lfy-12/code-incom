// 多级下拉
let cascader_data = []

function multiSelect(){
    let countSpan = `<span class='count'>${count}</span>`;
    let multiSelect_html = countSpan + multiSelect_template;
    const item = document.createElement('div');
    item.innerHTML = multiSelect_html;
    common(item);

    const btn = item.querySelector('.edit-option-list');
    btn.addEventListener('click',function(){
        
    })
}