// 双指针 遍历列 时间复杂度 o(n2) 超时
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let res = 0;
    for(let i = 0;i<height.length;i++){
        if(i===0||i==height.length-1) continue;  
        let leftH = height[i];
        let rightH = height[i];
        // 求左边最高
        for(let m = i - 1;m>=0;m--){
            leftH = leftH<height[m]?height[m]:leftH;
        }
        for(let n = i + 1;n<height.length;n++){
            rightH = rightH<height[n]?height[n]:rightH
        }
        // 求右边最高
        // 求列高度
        let h = Math.min(leftH,rightH) - height[i];
        if(h>0) res += h;
    }
    return res;
};

// 动态规划
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    // 动态规划，把每个位置的左边最高和右边最高都记录下来,注意是和自己的高度比，如果本身是最高的，说明最终高度小于等于 0 
    // maxL[i] = Math.max(height[i],maxL[i-1]);
    // maxR[i] = Math.max(height[i],maxR[i+1])
    let res = 0;
    let maxL = new Array(height.length).fill(0);
    let maxR = new Array(height.length).fill(0);
    maxL[0] = height[0];
    maxR[height.length-1] = height[height.length - 1];
    for(let i = 1;i<height.length;i++){
        maxL[i] = Math.max(height[i],maxL[i-1]);
    }
    for(let i = height.length - 2;i>=0;i--){
        maxR[i] = Math.max(height[i],maxR[i+1]);
    }
    for(let i = 0;i<height.length;i++){
        let h = Math.min(maxR[i],maxL[i]) - height[i];
        if(h>0){
            res += h;
        }
    }
    return res;
  
};

// 单调栈
