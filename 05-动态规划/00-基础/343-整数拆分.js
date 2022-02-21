var integerBreak = function(n) {
    let dp = new Array(n + 1);
    dp[2] = 1;
    for(let i = 3;i<=n;i++){
        for(let j = 1;j<i-1;j++){
             // 递推公式
            //  比较三个值，1. j 从 1 到 i-1 与 i - j 遍历相乘；2.j 和 dp[i - j] 相乘；dp[i] 上一次循环比较得到的值
            dp[i] = Math.max(dp[i],j*(i-j), j * dp[i-j])
        }
       
    }
    return dp[n]
};

// 用数学公式解：每次拆成n个3，如果剩下是4那就保留4，然后相乘
// https://leetcode-cn.com/problems/integer-break/solution/343-zheng-shu-chai-fen-tan-xin-by-jyd/
