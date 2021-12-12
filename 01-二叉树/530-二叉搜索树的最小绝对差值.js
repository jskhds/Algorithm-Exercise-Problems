/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 在递归的时候比
// 我们在新起节点的时候，声明为 null就行
 var getMinimumDifference = function(root) {
    let res = Infinity
    let pre = null
    function inOrder(root){
       if(root == null) return 
       inOrder(root.left)
       if(pre != null){
           res = Math.min(res,root.val - pre.val)
       }
       pre = root
       inOrder(root.right)
    }
   inOrder(root)
   return res
};
// 放到数组里面比
var getMinimumDifference = function(root) {
    // 二叉搜索树一般都采用中序遍历（递增数组）
   
    let res = []
    function inOrder(root){
        if(root == null) return 
        inOrder(root.left)
        res.push(root.val)
        inOrder(root.right)
    }
    inOrder(root)
    let minValue  = res[1] - res[0];
    for(let i = 2;i<res.length;i++){
        let temp = Math.abs(res[i]-res[i-1])
        minValue  = minValue<temp?minValue:temp
    }
    return minValue
};