var fib = function(n) {
    // 1.用一个一维dp数组来保存递归的结果 确定dp数组及其下标的含义 dp[i]:第i个数的斐波那契数值是dp[i];
    // 2.确定递推公式： dp[i] = dp[i-1] + dp[i-2];
    // 3.dp数组如何初始化  dp[0] = 0; dp[1] = 1;
    // 4.确定遍历顺序 因为dp[i]要用前面的两个数之和得到 所以从前往后遍历
    // 5.按照递推公式 举例推导递推数组
    const dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
   
    return dp[n];
};
// 不需要记录整个序列 维护两个数值即可
function fib1(n) {
    const dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2;i<=n;i++){
        let sum = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = sum;
    }
    return dp[1];
}

// 递归解法 时间复杂度 O(2^n) 空间复杂度 O(n)
function fib2(n) {
    if(n<2) return n;
    return fib2(n-1) + fib2(n-2)
    
}
console.log(fib2(4));