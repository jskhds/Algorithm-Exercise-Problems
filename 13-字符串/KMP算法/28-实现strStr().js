// 实现 strStr() 函数。

// 给你两个字符串 haystack 和 needle ，
// 请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    //  暴力法
    let len1 = haystack.length;
    let len2 = needle.length;
    for(let i = 0;i+len2<=len1;i++){
        let flag = true;
        for(let j = 0;j<len2;j++){
            if(haystack[i+j]!=needle[j]){
                flag = false;
                break;
            }
           
        }
        if(flag) return i;
    }
    
    return -1;
};

// KMP法
var strStr1 = function(haystack,needle){
    if(needle.length === 0) return 0;
    const getNext = (needle)=>{
        let next = [];
        let j = 0;
        next.push(j);
        for(let i = 1;i<needle.length;++i){
            while(j>0&&needle[i]!==needle[j]){
                j = next[j-1]
            }
            if(needle[i]===needle[j])
                j++;
            next.push(j);
        }
        return next;
    }
    let next = getNext(needle);
    let j = 0;
    for(let i = 0;i<haystack.length;++i){
        while(j>0&&haystack[i]!==needle[j])
            j = next[j-1];
        if(haystack[i]===needle[j])
            j++;
        if(j === needle.length)
            return (i-needle.length+1)
    }
    return -1;

}

 