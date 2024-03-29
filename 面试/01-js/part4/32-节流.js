const div1 = document.getElementById('div1')
function throttle(fn,delay){
    let timer = null;
    return function(){
        if(timer){
            return
        }
        timer = setTimeout( ()=>{
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}
div1.addEventListener('drag',throttle(function(e){
    console.log(e);
    console.log(e.offsetX);
},1000))