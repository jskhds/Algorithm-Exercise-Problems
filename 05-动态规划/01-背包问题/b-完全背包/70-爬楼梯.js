/**
 * 把问题改成：一步一个台阶，两个台阶，三个台阶，直到 m 阶，每一阶可以重复使用 有多少种方法到达楼顶呢？
 * 1~m 就是物品大小
 */

// 是完全背包的排列问题 1,2,3 和 3,2,1 不一样
const climbStairs = ( n )=>{
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for(let i = 1; i<=n;i++){
        for(let j = 1;j<=n;j++){
           if(i>=j) dp[i] += dp[i - j]
        }
    }
    return dp[n]
}
