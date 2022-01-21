/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let shortestStr = strs[0] 
    let longestCom = ""
    let startIndex  
    // 1.原数组最短的字符串
    for(let i = 0;i<strs.length;i++){
        shortestStr = strs[i].length<shortestStr.length?strs[i]:shortestStr
    }
    // 先令最长重复为原数组最短的字符串，以免循环出错
    longestCom = shortestStr
    // 固定最短的字符串和其余的字符串依次比较对应的字母，一旦 startIndex有值 就 break
    for(let i = 0;i<shortestStr.length;i++){
        for(let j = 0;j<strs.length;j++){
            if(shortestStr[i] !== strs[j][i]){
                startIndex = i   
            }
        }
        if(startIndex >=0){
            break
        }
    }
    
    return longestCom.substring(0,startIndex)
};