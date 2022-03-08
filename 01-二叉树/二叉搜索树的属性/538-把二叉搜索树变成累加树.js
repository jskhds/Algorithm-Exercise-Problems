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
 * @return {TreeNode}
 */
 var convertBST = function(root) {
    // 中序遍历倒过来
    let pre = 0;
    const reverInorder = (root) =>{
        if(!root) return null;
        reverInorder(root.right);
        root.val += pre;
        pre = root.val;
        reverInorder(root.left);
        return root;
    } 
    return reverInorder(root);
};