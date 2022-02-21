/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    // dp[i] 爬到第 i 层所需要的最小花费
    let dp = new Array(len);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for(let i = 2; i<len; i++){
        // 走到第 i 个台阶就必须付出 cost[i]， 跨过去则不用付出
        // 要么从 dp[ i - 1] 走到，要么从 dp[i -2]走到，反正踩到第 i 阶上了，就要付出 cost[i]
        dp[i] = Math.min(dp[i - 1] + cost[i] , dp[i - 2] + cost[i] );
        console.log(dp[i]);
    }
    return Math.min(dp[len - 1], dp[len - 2]);
};