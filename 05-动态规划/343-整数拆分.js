/**
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 */

 var integerBreak = function(n) {
    //  确定dp dp[i] 表示 数字 i 的最大乘积 首先要把dp[i]都初始化 不然循环里面要和dp[i] 比较的时候没有值可以比
    // 当然也可以初始化为1 那dp[2]也不用写了
    const dp = new Array(n+1).fill(1)
    // const dp = new Array(n+1).fill(0)
   
    // dp[2] = 1;
    // 初始化 dp[1] = 1 dp[2] = 1
    // dp[i] = j * (i - j) 或者 dp[i] = j * dp[i - j]
    // 确定遍历
    for(let i = 3;i<=n;i++ ){
        
        for(let j = 1;j<i-1;j++){            
            dp[i] =Math.max(dp[i], dp[i-j]*j,(i-j)*j);
        }
    }
    return dp;
};

const res = integerBreak(10);
console.log(res);