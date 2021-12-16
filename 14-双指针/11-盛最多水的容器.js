// 1.暴力法 会超时
 var maxArea = function(height) {
    let res = 0
    for(let i = 0;i<height.length;i++){
        for(let j = i + 1;j<height.length;j++){
            res = Math.max(res, (j - i)*Math.min(height[i],height[j]))
        }
    }
    
    return res
};

// 2.双指针法
// 定义指针在最左和最右各一个，area = Math.min(height[i],height[j]) * ( j - i)
// 每次都移动短板，因为移动短板才有可能使得面积比上一次大，移动长版只会使得底边变小，面积只会减小
// 当左右指针相遇时，比最开始面积大的情况都已经遍历完了，所以输出的 res 就是最终的 res
var maxArea = function(height) {
    let res = 0
    let i = 0
    let j = height.length - 1
    while(i!==j){
        res = Math.max(res, Math.min(height[i],height[j])*(j - i))
        if(height[i]<=height[j]){
            i++
        }else{
            j--
        }
    }
    return res
};

// 3.双指针优化（参考别人的）
var maxArea = function(height) {   
    let i = 0
    let j = height.length - 1
    let res = 0
    while(i<j){
        res = height[i]<height[j]?
        // 注意这里的 (j-i)和 i++ 或者 j-- 的位置不能变 因为自加自减都是先执行再自加自减，
        // 所以如果调换位置，i j 就变成了原来的 i+1 或者 j - 1了
        Math.max(res,(j - i) *height[i++]):
        Math.max(res, (j - i)*height[j--])   
    }
    return res
};
