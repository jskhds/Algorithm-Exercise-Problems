/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划 
 var wiggleMaxLength = function(nums) {
    let up = 1,down = 1;
    for(let i = 1;i<nums.length;i++){
        if(nums[i] > nums[i - 1]){
             up = down + 1;
        }
       
        if(nums[i] < nums[i - 1]){
            down = up + 1;
        }
    }
   return Math.max(up,down);
};

// 贪心
var wiggleMaxLength1 = function(nums) {
    let result = 1,preDiff = 0,currDiff = 0;
    for(let i = 1;i<nums.length;i++){
         currDiff = nums[i] - nums[i-1];
         if((currDiff>0&&preDiff<=0) ||( currDiff<0&&preDiff>=0)){
             result++;
             preDiff = currDiff;
         }
    }
    return result;
};