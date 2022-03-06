/**输入：nums1 = [1,4,2], nums2 = [1,2,4]
输出：2
解释：可以画出两条不交叉的线，如上图所示。 
但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2 的直线相交。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/uncrossed-lines
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var maxUncrossedLines = function(nums1, nums2) {
    // 其实就是求最长公共子序列
    let dp = new Array(nums1.length + 1).fill(0).map(()=>new Array(nums2.length + 1).fill(0));
    for(let i = 1;i<=nums1.length;i++){
        for(let j = 1;j<=nums2.length;j++){
            if(nums1[i-1] === nums2[j - 1]){
                dp[i][j] = dp[i-1][j - 1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[nums1.length][nums2.length];
};