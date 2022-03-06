 /**
  * 
  * @param {*} amount 
  * @param {*} coins 
  * @returns 
  * 输入：amount = 5, coins = [1, 2, 5]
输出：4
解释：有四种方式可以凑成总金额：
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

  */
 
 function fn(amount,coins){
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let i = 0;i<coins.length;i++){
        for(let j = coins[i];j<=amount;j++){
            // 求有多少种组合时 转移方程的形式都类似这样 不要理解错 += 的意思了
            dp[j] += dp[j - coins[i]];
        }
    }
    return dp[amount];
 }
 const res = fn(5,[1,2,3]);
 console.log(res);
