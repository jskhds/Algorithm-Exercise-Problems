/**
 * 输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
    // 这是最基本的题，但是要注意第一次买入时不存在前一天的操作
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
            // 注意 只允许交易一次也就是只能买进一次 所以 -prices[i]就是支出的钱，不能存在前一天的操作
            dp[i][1] = Math.max(dp[i-1][1], -prices[i])
        }
        console.log(dp);
        return dp[len - 1][0];
    };