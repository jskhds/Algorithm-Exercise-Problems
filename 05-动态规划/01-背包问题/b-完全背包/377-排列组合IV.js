// 求排列组合先遍历背包再遍历物品

function fn1(amount,number){
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let j = 0;j<=amount;j++){
        for(let i = 0;i<number.length;i++){
            if(j - number[i] >= 0){
                dp[j] += dp[j - number[i]];
            }
        }
    }
    return dp[amount];
}

console.log(fn1(4,[1,2,3]));