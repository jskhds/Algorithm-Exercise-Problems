// 转字符串的解法
var isPalindrome = function(x) {
    if(x < 0) return false  
    if(x>0){
        let str = x.toString().split('')
        let left = 0
        let right = str.length - 1
        while(left < right){
            if(str[left++] !== str[right--]){
                return false
            }
        }    
    }
    return true
};

// 取余和取第一个数依次比较
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0) return false
    let div = 1
    // 这一步拿到 x 最高位的除数
    while(x/div >= 10) {
        div *= 10
    }
    while(x !== 0){
        // left 是最高位的数，right 是最低位（也就是个位）的数
        left = parseInt(x/div)
        right = x%10
        // 把 x 的新值拿到 比如说 1221 上一步比较了前后的两个 1， 现在应该把 22 拿出来
        // 所以先模上一步的 div 也就是 1000 得到 221 ，然后再除以 10 拿到 22
        x = parseInt((x%div)/10)
        // 更新 div
        div /= 100
        if(right !== left) return false
    }
    return true
};