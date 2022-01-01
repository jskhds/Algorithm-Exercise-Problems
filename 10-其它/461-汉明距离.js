/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/**
 * 
 * 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
 *   给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 */
 var hammingDistance = function(x, y) {
    let s = x ^ y
    let res = 0
    while(s != 0){
        res++ 
        s = s & (s-1)
    }
    return res


};