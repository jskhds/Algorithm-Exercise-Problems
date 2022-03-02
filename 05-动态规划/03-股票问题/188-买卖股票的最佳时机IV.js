var maxProfit = function(k, prices) {   
    let dp = new Array(prices.length).fill(0).map(()=>new Array(2*k + 1).fill(0))
    if(prices.length == 0) return 0;
    // 初始化 奇数号都是买入，所以初始化为 1  每次加 2 即可
    // 注意界限问题 要算到 2*k 才够
    for(let i = 1;i<2*k ;i+=2){
        dp[0][i] = -prices[0];
    }
    for(let i = 1;i<prices.length; i++){
        for(let j = 1;j<2*k ;j+=2){
            dp[i][0] = dp[i - 1][0];
            // 买入状态
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j-1] - prices[i]);
            // 卖出
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1],dp[i-1][j] + prices[i] )
        }
    }
    console.log(dp)
    return dp[prices.length - 1][2*k];
};