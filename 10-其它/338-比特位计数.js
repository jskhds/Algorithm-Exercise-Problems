/**
 * @param {number} n
 * @return {number[]}
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，
 * 返回一个长度为 n + 1 的数组 ans 作为答案。
 */
 var countBits = function(n) {
    let res = []
    res[0] = 0
    for(let i = 1;i<=n;i++){
        if(i %2 === 0){
            res[i] = res[i/2]
        }else{
            res[i] = res[i-1] + 1
        }
    }
    return res
};