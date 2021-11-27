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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    // 求高度，从下往上数节点层数叫高度（深度是从上往下数） 用后序遍历
//    递归终止条件
    function getDepth(root){
        if(root === null) return 0;
        // 单层递归
        let leftHeight = getDepth(root.left);
        let rightHeight = getDepth(root.right);
        if(leftHeight === -1) return -1;
        if(rightHeight === -1) return -1;
        // 这句话是给下一次的节点用的 因为如果不满足条件的话，return -1 也就是下一层的leftHeight或者rightHeight为 -1
        if(Math.abs(leftHeight - rightHeight)>1) return -1;
        else{
            return Math.max(leftHeight,rightHeight)+1;
        }
    }

   return getDepth(root) === -1?false:true;




};