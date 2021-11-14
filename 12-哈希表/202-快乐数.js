/**
 * 
输入：19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let m = new Map();
    while(true){
        if(m.has(n)) return false;
        if(n === 1) return true;
        m.set(n,1)
        n = getSum(n);
    }
};
// 求和
function getSum(num){
    let sum = 0;
    let res = num.toString().split('');
    for(let i = 0;i<res.length;i++){
         sum += res[i]*res[i];
    }
    return sum;

}

function getSum1(n){
    let sum = 0;
    while(n){
        sum+= (n%10)**2;
        n = Math.floor(n/10);
    }
    return sum;
}