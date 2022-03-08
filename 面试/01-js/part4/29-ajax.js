// // XMLHttpRequest
// // get 请求
// const xhr = new XMLHttpRequest()
// // 方法，地址，false表示异步请求
// xhr.open('GET','/data/test.json',false)
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             // console.log(
//             //     JSON.parse(xhr.responseText)
//             // );
//             alert(xhr.responseText)
//         }else{
//             console.log('情况有误');
//         }
//     }
// }
// xhr.send(null)

// 手写 ajax
console.log('test');
function ajax(url){
    const p = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url,true) 
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 ){
                if(xhr.status === 200){
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                }
                else if(xhr.status === 404){
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}

const url = '/data/test.json'
ajax(url).then(res=>{
    console.log(res);
}).catch(err=>{
    console.error(err)
})

