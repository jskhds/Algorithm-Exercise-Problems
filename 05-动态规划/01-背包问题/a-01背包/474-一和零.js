/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/*
输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出：4
解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
//  */
    // 一样是可以转化为01背包问题, 物品的大小就是str中0 1的数量, 所以背包有两个维度
    // 物品的价值就是子集数量的多少
// 大体思路是这样的：首先我们先明确这是一个01背包问题，只是我们有两个背包，一个背包用来装最多m个0，一个背包用来装最多n个1
// 然后外层正序遍历物品，从0开始， 内层倒序遍历背包，
var findMaxForm = function(strs, m, n) {
    /**
    m和n是两个维度上考量的一个背包，每个物品的value就是每个字符串的个数，就是 1
    每个物品的重量(数量)就是字符串里有多少个 0 和 多少个 1
     */
  
    let dp = new Array(m + 1).fill(0).map(()=>new Array(n + 1).fill(0));
    for(let i = 0;i<strs.length;i++){
        // 每次计算 0 1 数量都要置零重新算
        let zeroNum = 0;
        let oneNum = 0;
        zeroNum += strs[i].split('0').length - 1; 
        oneNum += strs[i].split('1').length - 1;      
    for(let i = m;i>=zeroNum;i--){
        for(let j = n;j>=oneNum;j--){
            dp[i][j] = Math.max(dp[i][j],dp[i-zeroNum][j-oneNum] + 1)
        }
    } 
    }
    return dp[m][n];
};