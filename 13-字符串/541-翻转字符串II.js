// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

 
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    let arr = s.split("");
    // 关键是i每次移动2*k个  
    for(let i = 0;i<s.length;i+=2*k){
        let left = i-1;
        // 其次是right指针如果大于len 说明剩下的少于k个 也全部反转（左指针还是在length里面的，看右指针在哪里）
        let right = i+k>s.length?s.length:i+k;       
    // 先在while里面加减完之后再使用
       while(++left<--right){
            [arr[left],arr[right]] = [arr[right],arr[left]];
        }
    }
    return arr.join("");
}