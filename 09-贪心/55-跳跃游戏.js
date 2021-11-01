/**
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。  
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
//  如果某一个作为 起跳点 的格子可以跳跃的距离是 3，那么表示后面 3 个格子都可以作为 起跳点
// 可以对每一个能作为 起跳点 的格子都尝试跳一次，把 能跳到最远的距离 不断更新
// 如果可以一直跳到最后，就成功了
    let cover = 0;
    for(let i = 0;i<nums.length;i++){
        if(cover < i) return false;
        cover = Math.max(cover, i+nums[i]);   
    }
    return true;
}; 