/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    //  从小到大排序
     nums.sort((a,b)=>a-b);
     let res = [];
    
     for(let i = 0;i<nums.length;i++){
         if (nums[i]>0) break; //因为数组已经从小到大排序了
         let left = i+1; //nums[i]已经确定了索引 左指针从i后一个开始
         let right = nums.length - 1;
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
             
         const res = threeSum([-1,0,1,2,-1,-4,3]);
         console.log(res);