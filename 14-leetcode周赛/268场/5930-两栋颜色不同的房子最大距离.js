/**
 * @param {number[]} colors
 * @return {number}
 */
 var maxDistance = function(colors) {
    let dp = new Array(colors.length).fill(0)
    for(let i = 0;i<colors.length;i++){
        for(let j = i+1;j<colors.length;j++){
            if(colors[i]!==colors[j])
            dp[i]=Math.max(dp[i],Math.abs(i-j));
        }
}
 
    dp.sort((a,b)=>a-b);
    return dp[dp.length-1]
};
