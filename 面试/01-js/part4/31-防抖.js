const inp1 = document.getElementById('inp1')
// 不做防抖 keyup 不停触发，文字内容不停打印，所以要对 function 做防抖改进
// inp1.addEventListener('keyup',function(){
//     console.log(inp1.value);
// })
// let timer = null
// inp1.addEventListener('keyup',function(){
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer = setTimeout(function(){
//         // 模拟触发
//         console.log(inp1.value);
//         // 清空定时器
//         timer = null
//     },500)
// })

// 封装优化
function debounce(fn,delay){
    let timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(function(){
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}
inp1.addEventListener('keyup',debounce(function(){
    console.log(inp1.value);
},500))