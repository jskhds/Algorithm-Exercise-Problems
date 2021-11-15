// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

//  用哈希存两个数的和 然后再找第三个数 但是去重比较复杂 所以最好还是用双指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    //  从小到大排序
     nums.sort((a,b)=>a-b);
     let res = [];
    // 从第 i个开始 left从i+1开始 right从末尾开始 相加大于0 right移动 小于0 left移动
     for(let i = 0;i<nums.length;i++){
         if (nums[i]>0) break; //因为数组已经从小到大排序了
         let left = i+1; //nums[i]已经确定了索引 左指针从i后一个开始
         let right = nums.length - 1;
        //  这步用来去重
         if(i > 0 && nums[i] == nums[i-1]) continue;        
         while(left<right)
         {
            let sum = nums[i] + nums[left] + nums[right];
            if(sum == 0){
                res.push([nums[i],nums[left],nums[right]]);
                while (left<right && nums[left] == nums[left+1]) left++; // 因为左边要往右移动  所以要加找到不重复的为止
                while (left<right && nums[right] == nums[right-1]) right--; // 因为右边要往左移动 同上
                left++;
                right--;
            } 
            else if(sum>0){
               right--; 
            }
            else{
               left++; 
            }
         }
              } 
                   return res;
               }