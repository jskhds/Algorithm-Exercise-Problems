// 草稿p27~p29
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let k = 0;
    let ans = 0;    
    for(right = 0; right<s.length; right++){
        for(k = left; k < right; k++){
            if(s[k] == s[right]){
                left = k+1;
                break;
            }
        }
        if(right-left + 1 > ans)
        ans = right-left + 1;
        }
        return ans;
           
        
    }

/**
 * 首先要用滑动窗口解这道题 我们只需要找到 不重复字符串的长度就可以
 * 先定义一个数组 left值 和 right 值 覆盖到s字符串中
 * left和k是相关联的 k相当于一个中间变量 当我们的中间变量和right开始重合的时候 说明这个字符串开始了重复
 * 此时left就可以走到k+1  
 * break之后 right往下走 k也往下走 s[r] 依然等于 s[k]
 * 那么left继续往下走  直到k不等于right为止
 * 
 * 
 */
 const a = lengthOfLongestSubstring("abdabc");
 console.log(a);


//  解法 2 加了一个 map其实还是暴力解法 还有优化的空间
 var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length
    let max = 0
    let map = new Map()
    let start = 0   
    for(i = 0;i<s.length;i++){
        if(!map.has(s.charAt(i))){          
            map.set(s.charAt(i), 1)  
            max = map.size>max?map.size:max
        }else{
            max = map.size>max?map.size:max
            map.clear()  
            i = start++      
        }   
    }
    return max
};