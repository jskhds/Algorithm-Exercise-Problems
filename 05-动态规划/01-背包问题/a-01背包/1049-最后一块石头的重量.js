 /**
 * @param {number[]} stones
 * @return {number}
 */
  var lastStoneWeightII = function(stones) {
    // 尽量分成大小相等的两堆，最后的差值就是答案
    // dp[j] 容量为 j 的背包可以放下的最大重量，不一定能装满，但肯定不能超过 j
    // dp数组的最大容量应该是 stones 总重量的一半(向下取整)，注意，不一定能装满
    let sum = eval(stones.join("+"))
    let targetWeight = parseInt(sum/2)
    console.log(sum,targetWeight)
    // 长度应该是 1501，因为有可能最后容量刚好为 1500，需要拿到 dp[1500] 的值
    let dp = new Array(1501).fill(0);
    for(let i = 0;i<stones.length;i++){
        for(let j = targetWeight;j>=stones[i];j--){
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }   
    }
    // sum - dp[targetWeight] 是剩下的那堆，肯定比 dp[targetWeight] 大，然后再相减即是答案
    return sum - dp[targetWeight] - dp[targetWeight];

};