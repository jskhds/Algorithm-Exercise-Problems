// 输入：arr = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

var lengthOfLIS = function(arr) {
    // dp[i] 第 i 个元素位置最长的严格递增序列长度
    // 如果 arr[i] < arr[i + 1] 那么，dp[i] = dp[i - 1] + 1; 不然 dp[i] = dp[i - 1]?
    let dp = new Array(arr.length).fill(1);
    let res = 1;
    for(let i = 1;i<arr.length;i++){
        // arr[i] 要和其前面的每一个值都比较一遍
        for(let j = 0;j<i;j++){
            if(arr[i]>arr[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = dp[i] > res?dp[i]:res;
    }
    return res;

    
};

function lengthOfLis(arr){
    let dp = new Array(arr.length).fill(1);
    let res = 1;
    for(let i = 1;i<arr.length;i++){
        for(let j = 0;j<i;j++){
            dp[i] = Math.max(dp[i],dp[j] + 1);
        }
    }
    res = dp[i]>res?dp[i]:res;
    return res;
}