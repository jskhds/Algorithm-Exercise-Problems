// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 你可以按 任何顺序 返回答案。

var combine = function(n, k) {
    let res = []
    let path = []
    const backTracking= (n,k,startIndex)=>{
        // 终止条件
        if(path.length === k){
            console.log(path)
            // 这个地方要用 slice 因为path是引用类型 如果直接push就是复制内存地址添加
            // ，那么之后对path的操作也会影响到res
            res.push(path.slice())
            return
        }
        for(let i = startIndex;i<=n;i++){
            path.push(i)
            backTracking(n,k,i+1)
            path.pop()
        }
    }
    backTracking(n,k,1)
    return res
};
// 剪枝优化
var combine = function(n, k) {
    let res = []
    let path = []
    const backTracking= (n,k,startIndex)=>{
        if(path.length === k){
            res.push(path.slice())
            return
        }
        // for 循环优化
        // path.length 已经选择了几个元素
        // k - path.length 还需要选择几个元素
        // i<= 的数是递归中可以从哪里开始选择，比如说 n = 4，k = 3，那么可以从 1或者2开始选择（注意是组合问题）
        for(let i = startIndex;i<=n - (k-path.length)+1;i++){
            path.push(i)
            backTracking(n,k,i+1)
            path.pop()
        }
    }
    backTracking(n,k,1)
    return res
};
