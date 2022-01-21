/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0") return "0"
    // 首先初始化一个数组存储结果
    const len1 = num1.length
    const len2 = num2.length
    let res = new Array(len1 + len2).fill(0)

    for(let i = len1 - 1;i>=0;i--){
        // 把 num1[i] 变为数字再赋值给 n1
        let n1 = +num1[i]
        for(let j = len2-1; j>=0; j--){
            let n2 = +num2[j]
            let multi = n1*n2
            // 注意这个进位相加 因为是下一轮循环才能拿到上一轮的进位，此时的 j 已经减 1了， 所以 i+j 之后还要 +1
            let sum = multi + res[i+j+1]
            res[i+j+1] = sum%10
            res[i+j] += parseInt(sum/10)
        }
    }

    while(res[0] === 0){
         res.shift()
    }
    return res.join("")
};