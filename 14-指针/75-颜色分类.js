/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let len = nums.length
    let p0 = 0
    let p2 = len - 1       
    for(let i = 0;i<=p2;i++){
      while (i <= p2 && nums[i] === 2){     
                        
          [nums[p2],nums[i]] = [nums[i],nums[p2]]   
          p2--
          
      }
       if(nums[i] === 0){
            [nums[p0],nums[i]] = [nums[i],nums[p0]]
            p0++
        }
         
    }

};