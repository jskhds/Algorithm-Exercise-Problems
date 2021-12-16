var combine = function(n, k) {
    let res = []
    let path = []
    const backTracking= (n,k,startIndex)=>{
        // 终止条件
        if(path.length === k){
            console.log(path)
            res.push(path.slice())
            return
        }
        // 单层搜索的过程
        // 宽度 数组的长度
        for(let i = startIndex;i<=n;i++){
            path.push(i)
            // 深度 一层层递归 
            backTracking(n,k,i+1)
            path.pop()
        }
    }
    backTracking(n,k,1)
    return res
};
let res = combine(4,2)
console.log(res);