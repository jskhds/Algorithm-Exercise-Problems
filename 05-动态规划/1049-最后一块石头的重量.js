 /**
 * @param {number[]} stones
 * @return {number}
 */
// 01背包问题 因为每个值都只用 1 次
var lastStoneWeightII = function(stones) {
    // dp 数组最大容量是 max(stones[length]) * max(stones[i]) /2 + 1
    // dp[j]的含义是 容量为j的背包 最多可以背dp[j]这么多的石头 
    let dp =  new Array(15001).fill(0);    
    let sum = 0;
    for(let i = 0;i<stones.length;i++){
        sum += stones[i];
    }
    // target 需要向下取整 js里的parseInt去掉小数点可以满足
    let target =parseInt(sum/2);
    // 遍历 先正序物品 再倒序背包
    for(let i = 0;i<stones.length;i++){
        for(let j = target;j>=stones[i];j--){
            dp[j] =Math.max(dp[j],dp[j - stones[i]] + stones[i])
            
        }
    }
    return sum - dp[target] - dp[target];

};