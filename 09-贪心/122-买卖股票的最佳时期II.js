/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // 贪心   收集峰值 可以看成前一天买进后一天卖出 相加可以抵消不需要操作的天数
        let sum = 0;
        for(let i = 1;i<prices.length;i++){
            if(prices[i] - prices[i-1]>0){
                sum += prices[i] - prices[i-1] ;
            }
        }    
         return sum;
    };