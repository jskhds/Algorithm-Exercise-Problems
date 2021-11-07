/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
      // 原始版滑动窗口
      let len = nums.length;
      let sum = 0;
      let begin = 0;
      let count = 0;
      let res = 100000; 
     for(let i = begin;i<len;i++){
         sum += nums[i];
         count++;
         if(sum>target||sum==target){         
             i=begin++;
             res = Math.min(count,res);
             sum = 0;
             count = 0;
         }
         
     }
      return res==100000?0:res;
};

const res = minSubArrayLen(7,[2,3,1,2,4,3]);
console.log(res);