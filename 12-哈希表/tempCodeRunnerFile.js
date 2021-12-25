function throttle(fn,delay){
     let timer = null
     return function(){
         if(timer){
             return
         }
         timer = setTimeout(() => {
             fn.apply(this,arguments)
             timer = null
         }, delay);
     }
   
}
const div1 = document.getElementById('div1')
div1.addEventListener('drag',throttle(
     
    (e)=>{
        console.log(e);
    }
    ,1000))

