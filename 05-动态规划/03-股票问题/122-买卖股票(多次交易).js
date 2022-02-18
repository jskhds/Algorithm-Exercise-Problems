/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    //  动规
        let len = prices.length;
        if(len<2) return 0;
        let dp = new Array(len).fill([0,0])
        dp[0][1] = -prices[0];
        dp[0][0] = 0;
        for(let i = 1;i<len;i++){
            // 第i天不持有股票 要么前一天持有今天卖了，那么要加prices[i] 要么前一天就不持有
            // 这里之所以在卖出时要考虑前一天其实也很清楚，因为前一天持有股票，那么钱就是负数
            dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);
            // 第i天持有股票，要么前一天持有今天没有卖出，要么前一天不持有今天买进 
            // 注意 因为可以多次交易 所以 -prices[i]也就是支出的时候要考虑前一天的状态
            dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i])
        }
        
        return dp[len - 1][0];
    };