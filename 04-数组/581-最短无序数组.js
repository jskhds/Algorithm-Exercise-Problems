/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    let max = nums[0]
    let min = nums[nums.length - 1]
    let begin = 0, end = -1
    const len = nums.length
    for(let i = 0;i<len;i++){
      
        if( nums[i] >= max){
            max = nums[i]
        }else{
            end = i
        }
        if(nums[len - i - 1] <=  min){
            min = nums[len - i - 1]
        }else{
            begin = len - i - 1
        }
    }
    console.log(end,begin)
    return end - begin + 1
};