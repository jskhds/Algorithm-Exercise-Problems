/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    //  dp[i] amount == i 时所需要的的最小硬币数为dp[i]
    let  dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    // 递归思想 比如说coins[1,3,5] 我们要找110的最小硬币数
    // 那么有三种解法 dp[109]+1 dp[107]+3 dp[105]+5 也就是dp[amount-coin] + coin
    // 找到里面最小的以后  再继续重复 +1 +3 +5 但是前提是i-coin>=0 比如说 ([1,2,3],3)如果不写等于的话 其实只要一步3就可以 但是i取不到3，只能用1 和 2 来加
    for(let i = 1;i <=amount;i++){        
        for(let coin of coins){
            if( (i-coin) >= 0)
            dp[i] = Math.min(dp[i],dp[i-coin]+1);    
        }  
    }
     
    return dp[amount];
};

const res = coinChange([1,2,5],11);
console.log(res);