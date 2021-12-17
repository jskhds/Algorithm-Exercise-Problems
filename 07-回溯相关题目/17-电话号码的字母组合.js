/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    // 回溯算法
        // 定义映射数组
        const String = [ "",  "","abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" ]
        if(!digits){
            return []
        }
        let res = []
        let tempS = []
        const backTracking = (digits,index)=>{
            // 终止条件
            console.log('afterI',index)
            if(index === digits.length){
                res.push(tempS.join(""))
                return
            }
            // for循环 调用递归
            // 单层递归逻辑
            let digit = digits[index]
            let s = String[digit]
            for(let i = 0;i<s.length;i++){
                tempS.push(s[i])        
                backTracking(digits,index + 1)   // index + 1 是遍历下一层 for 循环，注意这个index 用的是调用的 index + 1 所以一次 for 循环里 因为包着它们的 index 不变 所以每次加一也都不变
                tempS.pop()
            }
        }
        backTracking(digits,0)
        return res
        
    };