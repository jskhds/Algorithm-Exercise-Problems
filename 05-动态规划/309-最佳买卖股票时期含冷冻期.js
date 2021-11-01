/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(prices.length < 2) {
      return 0
  } else if(prices.length < 3) {
      return Math.max(0, prices[1] - prices[0]);
  }

  let dp = Array.from(Array(prices.length), () => Array(4).fill(0));
  dp[0][0] = 0 - prices[0];

  for(i = 1; i < prices.length; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], Math.max(dp[i-1][1], dp[i-1][3]) - prices[i]);
      dp[i][1] = Math.max(dp[i -1][1], dp[i - 1][3]);
      dp[i][2] = dp[i-1][0] + prices[i];
      dp[i][3] = dp[i-1][2];
  }

  return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2], dp[prices.length - 1][3]);
  // 注意 保持 的意思
  // 0买入股票（今天才买或者之前买了(如果是之前买的，那么前一天的状态有可能是冷冻期，有可能是保持卖出股票的状态)但是没有操作，也就是保持买入股票的状态） 
  // 1两天或更多天前卖出股票度过冷冻期 也就是保持卖出股票的状态
  // 2今天卖出股票
  // 3冷冻期
   
  
  }