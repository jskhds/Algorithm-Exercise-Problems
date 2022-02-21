/**
 * @param {number} n
 * @return {number}
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树有多少种？
 * 返回满足题意的二叉搜索树的种数。
 */
 var numTrees = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= i - 1; j++) {
        // 如果整数1 ~ n中的 k 作为根节点值，则 1 ~ k-1 会去构建左子树，k+1 ~ n 会去构建右子树。
        // 左子树出来的形态有 aa 种，右子树出来的形态有 bb 种，则整个树的形态有 a * b + a∗b 种。
        // 除去根节点，那么还剩 i - 1 个节点，依次累加就是递推公式
        dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n];

 
};