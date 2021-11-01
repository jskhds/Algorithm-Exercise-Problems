/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
     if(prices.length < 1 ) return 0
    let len  = prices.length;
    let dp = Array.from(Array(prices.length), () => Array(2).fill(0));
    dp[0][0] -= prices[0];
    for(let i = 1;i<len;i++){
        // 处于买入的状态
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]-prices[i]);
        // 处于卖出的状态
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i]-fee);
    }
    return dp[len-1][1];
};

let res = maxProfit([1, 3, 2, 8, 4, 9],2);
console.log(res);