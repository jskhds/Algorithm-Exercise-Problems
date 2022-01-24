/**
 * @param {number} n
 * @return {number[]}
 */
 function grayCode(n) {
    let res = []
    let times = Math.pow(2, n)
    for(let i = 0;i< times;i++){
        // ^ 是异或操作
        // i>>1 把 i 的二进制数往右移动 1 位，最高位补 0 相当于 i 的二进制 + 1
        res.push(i ^ i>>1)
    }
    return res
}
 
// 对称法
// k+1 的格雷码 是 k 的长度的两倍，所以把 k 的格雷码翻转加 1  之后接到后面就是 k + 1 的格雷码


var grayCode = function(n) {
    const ret = [0];
    for (let i = 1; i <= n; i++) {
        const m = ret.length;
        for (let j = m - 1; j >= 0; j--) {
            ret.push(ret[j] | (1 << (i - 1)));
        }
    }
    return ret;
};


 