/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    //  爬上第 i 阶台阶对应的花费 爬上最后一阶不用花费
    const dp = [];
    //初始化
    dp[0] = cost[0];
    dp[1] = cost[1];
    // 递推公式 找出爬到顶层的最小花费
    for(i=2;i<cost.length;i++){
        dp[i] = Math.min(dp[i-1],dp[i-2]) + cost[i];
    }
   
    return dp;
};
const res = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
console.log(res);