/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    //  dp[i] 的定义： 爬到第i层楼梯有dp[i]种方法
    const dp = new Array(n+1);
    // 初始化 爬到第一层楼梯有一种方法 爬到第二层楼梯有两种方法
    dp[1] = 1;
    dp[2] = 2;
    // 遍历顺序 从前往后遍历
    // 递推公式： 第i层的走法 有两种来源： 1. 从第i-1层爬一阶上来 2.从第i-2层爬两阶上来
    for(let i = 3; i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};
console.log(climbStairs(5));