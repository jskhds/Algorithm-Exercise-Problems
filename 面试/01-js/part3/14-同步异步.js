// ajax 图片加载
// console.log("start");
// let img = document.createElement('img')
// img.onload = function (){
//     console.log('onload');
    
// }
// img.src = '/xxx.png's
// console.log("end");

// 定时器
// setTimeout 
// console.log(100);
// setTimeout(function() {
//     console.log(200);
    
// },1000)
// console.log(300);

// setInterval 循环执行 每隔 interval打印一次
// console.log(100);
// setInterval(() => {
//     console.log(200);
// }, 1000);
// console.log(300);

// callback hell
// $.get(url1,(data1)=>{
//     console.log(data1);
//     $.get(url2,(data2)=>{
//         console.log(data2);
//         $.get(url3,(data3)=>{
//             console.log(data3);
//         })
//     })
// })

// promise
function getData(url ) {
    return new Promise((resolve,reject)=>{
        $.ajax({
            url,
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
    
}

const url1 = '/data1.json'
const url2 = '/data2.json'
const url3 = '/data3.json'
getData(url1).then(data1=>{
    console.log(data1);
    return getData(url2)
}).then(data2=>{
    console.log(data2);
    return getData(url3)
}).then(data3=>{
    console.log(data3);
}).catch(err => console.error(err))