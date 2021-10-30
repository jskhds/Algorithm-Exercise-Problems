/**
 * 输入: g = [1,2,3], s = [1,1]
输出: 1
解释: 
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。
链接：https://leetcode-cn.com/problems/assign-cookies
 
 */

// 两者都倒序遍历，用大的比大的， s是饼干尺寸数组，g是儿童胃口数组
function findContentChild(g,s){
    s.sort((a,b)=>a-b);
    g.sort((a,b)=>a-b);
    let index = s.length - 1;
    let sum = 0;
    // 遍历儿童数组
    for(let i = g.length - 1;i>=0;i--){
        if( s[index]>=g[i] && index >=0){
            index--;
            sum++;
        }
    }
   
   return sum;
}
// 这道题比较有意思的是不用写两个循环来比例 多写一个index参数就可以了