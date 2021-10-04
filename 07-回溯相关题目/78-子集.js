// 1.扩展法
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let len = nums.length;
    let res =[];
    if(len === 0){
        return res;
    }
    res.push([]);
    for(let i = 0; i < len ; i++){
        res.push([nums[i]]);
      
        // for(let j = i + 1;j<len;j++){
        //     res[i].push(nums[j])
        // }
    }
    return res;
};
let res = subsets([1,2]);
console.log(res);