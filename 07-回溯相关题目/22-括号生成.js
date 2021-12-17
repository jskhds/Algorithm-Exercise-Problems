/**
 * @param {number} n
 * @return {string[]}
 */

// https://leetcode-cn.com/problems/generate-parentheses/solution/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/
 var generateParenthesis = function(n) {
    
    let res = []
    const backTracking = (leftRemain,rightRemain,s)=>{
        if(s.length === n *2){
            res.push(s)
            return 
        }
        // 单层递归逻辑
        if(leftRemain>0){
            backTracking(leftRemain - 1,rightRemain,s+'(')
        }
        if(rightRemain > leftRemain){
            backTracking(leftRemain,rightRemain-1,s+')')
        }
    }
    backTracking(n,n,'')
    return res
};