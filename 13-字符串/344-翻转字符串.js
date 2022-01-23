/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let left = -1;
    let right = s.length;
    // 先在while里面加减完之后再使用
       while(++left<--right){
            [s[left],s[right]] = [s[right],s[left]];
        }
    
    return s;
};
console.log(reverseString("xfsaufh"));