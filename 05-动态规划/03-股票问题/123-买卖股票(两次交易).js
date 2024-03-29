/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // 一共有5个状态 
    // 0 没有操作 1 第一次买入 2 第一次卖出 3 第二次买入 4 第二次卖出，也很简单
        let len = prices.length;
        let dp = new Array(len).fill(0).map(x => new Array(5).fill(0));
        dp[0][1] = -prices[0];
        dp[0][3] = -prices[0];
        // dp[0][0] dp[0][2] dp[0][4]都等于0 就不用再初始化了
        for(let i = 1;i<len;i++){        
            dp[i][0] = dp[i-1][0];
            dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] - prices[i]);
            dp[i][2] = Math.max(dp[i-1][2],dp[i-1][1] + prices[i]);
            dp[i][3] = Math.max(dp[i-1][3],dp[i-1][2] - prices[i]);
            dp[i][4] = Math.max(dp[i-1][4],dp[i-1][3] + prices[i]);
        }
        return dp[len-1][4];
        }
