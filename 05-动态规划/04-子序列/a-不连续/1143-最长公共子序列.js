// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(a, b) {
    //  dp[i][j] 0到i-1 和0到j-1的最长公共子序列
    let dp = new Array(a.length + 1 ).fill(0).map(x=>new Array(b.length + 1).fill(0))
    let res = 0
    for(let i = 1;i<=a.length;i++){
        for(let j = 1;j<=b.length;j++){
            if(a[i-1] === b[j-1]){
                dp[i][j] =  dp[i-1][j-1] + 1
            }
            else{
                // 最主要是这个不相等的情况
                // 如果a[i] b[j]不相等的话，就看 要么看a的前一个和当前b的值，要么看b的前一个和当前a 的值。
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
           
        }
    }
    return res
};
let res = longestCommonSubsequence1("abcde","ace")
console.log(res);
 