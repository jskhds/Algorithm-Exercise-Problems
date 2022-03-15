// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
// 示例 1：
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 如果要去重，一般都要排序
 var permuteUnique = function(nums) {
    let res = [];
    let path = [];
    nums.sort((a,b)=>a-b)
   const backTracking = (nums,used)=>{
       if(path.length === nums.length){
           res.push(path.slice());
           return; 
       }
       for(let i = 0;i<nums.length;i++){
        //    注意还需要满足 !used[i-1]
           if(i>0 && nums[i] === nums[i - 1] && !used[i-1] ){
               continue;
           }
           if(!used[i]){
               used[i] = true;  
               path.push(nums[i]);
               backTracking(nums,used);
               path.pop();
               used[i] = false;
           }
           
       }
   }
   backTracking(nums,[]);
   return res;
   
};