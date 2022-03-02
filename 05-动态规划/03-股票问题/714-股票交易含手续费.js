/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
    let dp = new Array(prices.length).fill(0).map(()=>new Array(3).fill(0));
    dp[0][1] = - prices[0];
    for(let i = 1;i<prices.length;i++){
        
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2] - prices[i]);
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i] - fee);

    }
    return Math.max( dp[prices.length - 1][2], dp[prices.length - 1][1])
};