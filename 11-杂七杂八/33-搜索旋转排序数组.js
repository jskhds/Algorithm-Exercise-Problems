/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums,target) {
   const peak =  findPeak(nums); 
   let nums1 = [];
   let target1 = target;   
   let res = 0;  
   if(nums.length == 0) return -1;
   if(target > nums[0]){
        nums1 = nums.slice(0,peak + 1);
         res = binary(nums1,target1) 
   }
   else if (target <= nums[nums.length-1]){
    nums1 = nums.slice(peak+1, nums.length);
     res = binary(nums1,target1) + peak + 1;
   }
   if(res){
    return res;
   }
   else return -1;
  
};
var findPeak = function (nums)  //已test过
{
    let left = 0;
    let right = nums.length - 1;
     // 先找到峰值在什么地方 用指针靠近
     while(left <= right){      
        let mid =Math.floor((left + right)/2);      
        // 第一种情况 nums[mid] 就是 peak 也就是 突然下降 不是单调递增 （下面左右指针的值改变，目的也是为了让mid和peak位置重合）
        if(nums[mid] > nums[mid+1]){
         let    peak = mid;
         return peak;
          
        } 
        // 第二种情况 nums[mid]在peak 的左边  那么mid的值需要增加 也就是左指针的值要加 之所以基准是mid 是因为mid 左边的数都可以不考虑 第三种情况同理
        else if(nums[mid] > nums[right]){
            left = mid + 1;
        }
        // 第三种 nums[mid] 在peak 的右边 那么mid的值需要减小 也就是右指针的值要减
        else if(nums[mid] < nums[right]){
            right = mid - 1;
        }
     }
    
};

var binary = function(nums1, target) { //已经test过
    let left = 0;
    let right = nums1.length -1;   
    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums1[mid] == target){
            return mid;
        }
        else if (nums1[mid] >= target){
            right = mid - 1;
        }
        else if ( nums1[mid] < target){
            left = mid + 1;
        }

    }
     
     
 };
