/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n<=3) return n;
    const dp = new Array(n + 1);
    for(let i = 0;i<=3;i++){
        dp[i] = i;
    }
    for(let i = 4;i<=n;i++){
        //因为一次只能爬 1 或 2 个台阶，所以后面的状态： 由倒数第一层楼梯的状态 + 倒数第二层楼梯的状态推导而来
        dp[i] = dp[i-1] + dp[i-2] ;
        console.log(dp[i])
    }
    return dp[n]
};