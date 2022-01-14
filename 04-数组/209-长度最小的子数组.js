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

// 改进版滑动窗口
var minSubArrayLen = function(target, nums) {
     let res = 100000;
     let sum = 0;
     let j = 0;
     let s = 0;
     for(let i=0;i<nums.length;i++){
         sum+=nums[i];
         while(sum >=target){
             s = (i-j+1);
             res = res<s?res:s;
             sum-=nums[i++];
         }
     }
    return res==100000?0:res;
};
const res = minSubArrayLen(7,[2,3,1,2,4,3]);
console.log(res);