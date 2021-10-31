/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // 贪心 找到最大的和最小的相减
    let low = 100000;
    let income = 0;
        for(let i = 0;i<prices.length;i++){
            // 找到最小的买入值
            low = Math.min(low,prices[i]);
            // 找到最大的利润
            income = Math.max(income,prices[i] - low);
        }
        return income;
};