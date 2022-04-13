/**
 * 输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25
 */

var sumNumbers = function(root) {
    const helper = (root,curValue)=>{
        if(root == null){
            return 0;
        }
        curValue = root.val + curValue * 10;
        if(root.left == null && root.right == null){
            return curValue;
        }
        return  helper(root.left,curValue) + helper(root.right,curValue);
    }
    return helper(root,0)
};