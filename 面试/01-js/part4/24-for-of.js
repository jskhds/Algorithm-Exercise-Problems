function multi(num){
    return new Promise( resolve=>{
        setTimeout(()=>{
            resolve(num*num)
        },1000)
    }         )
}

const nums = [1,2,3]
// 1s 间隔后立即打印出 res 的三个结果 1 4 9
nums.forEach(
    async(i)=>{
        const res = await multi(i)
        console.log(res);
    }
    
)  

// 如果要按照 1s 间隔逐个打印出来
!(async function(){
    for(let i of nums){
        const res = await multi(i)
        console.log(res);
    }
})()
