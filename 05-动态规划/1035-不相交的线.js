/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//  和找到最长公共子序列是一个意思
var maxUncrossedLines = function(a, b) {
    let dp = new Array(a.length + 1 ).fill(0).map(x=>new Array(b.length + 1).fill(0))
    let res = 0
    for(let i = 1;i<=a.length;i++){
        for(let j = 1;j<=b.length;j++){
            if(a[i-1] === b[j-1]){
                dp[i][j] =  dp[i-1][j-1] + 1
            }
            else{
                // 最主要是这个不相等的情况
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
            res = Math.max(res,dp[i][j])
        }
    }
    return res
};