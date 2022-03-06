/**
 * 
 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
 */
var coinChange = function(coins, amount) {
    // 因为条件限制，所以最多也就是 10000 种方式，对应数组 [1]
    let dp = new Array(amount + 1).fill(10000);
    dp[0] = 0;
    // 完全背包求组合数 都是正序遍历，先物品后背包
    for(let i = 0;i<coins.length;i++){
        for(let j = coins[i];j<=amount;j++){
            // 求最小，所以要么是 dp[j] 要么是 dp[j - coins[i]] 加上本身这个coins[i]的value，也就是 1
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1) 
        }
    }
    return dp[amount]==10000?-1:dp[amount];
};

