// 比较好理解的版本，把 小于等于 n 的完全平方数的数组单独算出来
var numSquares1 = function(n) {
   
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    let num = [];
    for(let i = 1;i*i<=n;i++){
        num.push(i*i);
    }
    // 其实这道题就是 coin change 问题，可以先找到自己的coins，即找到小于等于这个数的所有平方数集合，然后就是用最少的coins来凑target了
    for(let i = 0;i<num.length;i++){
        for(let j = num[i];j<=n;j++){
         if(j >= num[i])   dp[j] = Math.min(dp[j], dp[ j - num[i]] + 1);
        }
    }
    return dp[n]

};