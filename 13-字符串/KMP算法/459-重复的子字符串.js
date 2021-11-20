// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。
// 给定的字符串只含有小写英文字母，并且长度不超过10000。
/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    let s1 = (s + s).slice(1, -1);
    return s1.indexOf(s) != -1;
};

// KMP
var repeatedSubstringPattern1 = function(s) {
    if(s.length === 0) return false;
    const getNext = (s)=>{
        let next = [];
        let j = 0;
        next.push(j);
        for(let i = 1;i<s.length;++i){
            while(j>0&&s[i]!==s[j]){
                j = next[j-1]
            }
            if(s[i]===s[j])
                j++;
            next.push(j);
        }
        return next;
    }
    let next = getNext(s);
    if(next[next.length-1]!==0 && s.length%(s.length - next[next.length - 1])===0)
        return true;
    return false;
};