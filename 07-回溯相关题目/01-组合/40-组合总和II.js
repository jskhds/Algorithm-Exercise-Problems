// 给定一个候选人编号的集合 candidates 和一个目标数 target ，
// 找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用 一次 。
// 注意：解集不能包含重复的组合。 

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b);  
    let res = [];
    const backTracking = (path,startIndex,sum)=>{
        if(sum >= target){
            if(sum === target){
                res.push(path.slice());
            }
            return;
        }
        for(let i = startIndex;i<candidates.length;i++){
            // 判断是否重复 首先，要确保 i - startIndex - 1 是有效的，注意我们的 i 是从 startIndex 开始
            // 所以实际上我们的数组为 startIndex 到 len - 1，也就是说 i - 1 >= startIndex  
            if(i >= startIndex + 1 && candidates[i] === candidates[i-1]){
                continue;
            }        
            path.push(candidates[i]);       
            backTracking(path,i + 1,sum + candidates[i]);        
            path.pop();
        }
    } 
    backTracking([],0,0);
    return res;
};