/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(prices.length === 0) return 0;
    // 0 1买入 2卖出 3冷冻期
    let dp = new Array(prices.length).fill(0).map(()=>new Array(4).fill(0));
    dp[0][1] = -prices[0];
    for(let i = 1;i<prices.length;i++){
        dp[i][0] = dp[i-1][0];
        dp[i][1] =Math.max( dp[i - 1][3] - prices[i], dp[i - 1][1]);
        dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i]);
        dp[i][3] = dp[i - 1][2];
    }
    return Math.max(dp[prices.length - 1][2], dp[prices.length - 1][3]);
};