// 通用的事件绑定函数
function bindEvent (elem, type, selector,fn){
    // 只传入三个参数，说明没有选择器
    if(fn == null){
        fn = selector
        selector = null
    }
    elem.addEventListener(type,e=>{
        // 函数里面传函数，其实就是执行里面的函数
        fn(e)    
    })
}

// 代理绑定 事件代理
const div3 = document.getElementById('div3')
bindEvent(div3,'click','a',e=>{
    e.stopPropagation()
    alert(e.target.innerHTML)
})

 