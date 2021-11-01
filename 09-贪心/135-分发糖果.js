/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    let candy = new Array(ratings.length).fill(1);
    const len = ratings.length;
    let sum = 0;
    // 从前往后遍历 右边大于左边
    for(let i = 1;i<len;i++){
        if(ratings[i]>ratings[i-1]){
            candy[i]  = candy[i-1]+1;
        }
    }
    // 从后往前遍历 左边大于右边 
    for(let i = len-1;i>0;i--){
        if(ratings[i-1]>ratings[i]){
            // 注意这个地方 取大一点的值
            candy[i-1] =Math.max(candy[i-1],candy[i]+1) ;
        }
    }
    for(let i = 0;i<candy.length;i++) {
        sum += candy[i];
    }
    return sum;
}