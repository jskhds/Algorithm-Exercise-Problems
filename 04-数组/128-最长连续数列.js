/**
 * @param {number[]} nums
 * @return {number}
 */

// 排序法 不符合题目的时间复杂度要求
 var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    nums.sort((a,b)=> a - b)
    let res = 1
    let count = 1
    for(let i = 1;i<nums.length;i++){
        if(nums[i] - nums[i-1] === 1){
            count++            
        }else if(nums[i] === nums[i-1] ){ 
            continue           
        }
        else{
             count = 1
        }
        res = Math.max(res,count)
    }
    return res
};

// set 法
var longestConsecutive = function(nums) {
    // set 法 
    let set = new Set(nums)
    // console.log(set)
    let max = 0
    let count = 0
    for(let i = 0;i<nums.length;i++){
        if(!set.has(nums[i]-1)){  // 开头的数
            count = 1
            let cur = nums[i]
            while(set.has(cur+1)){  // 在 set 里面查找
                cur++
                count++
            }
        }
        max = Math.max(count,max)
    }
    return max
};

// 哈希法 感觉不是特别懂
var longestConsecutive = function(nums) {
    let map = new Map()
  let max = 0
  for (const num of nums) { // 遍历nums数组
    if (!map.has(num)) { // 重复的数字不考察，跳过
      let preLen = map.get(num - 1) || 0  // 获取左邻居所在序列的长度 
      let nextLen = map.get(num + 1) || 0 // 获取右邻居所在序列的长度 
      let curLen = preLen + 1 + nextLen   // 新序列的长度
      map.set(num, curLen) // 将自己存入 map
      max = Math.max(max, curLen) // 和 max 比较，试图刷新max
      map.set(num - preLen, curLen)  // 更新新序列的左端数字的value
      map.set(num + nextLen, curLen) // 更新新序列的右端数字的value
    }
  }
  return max

};