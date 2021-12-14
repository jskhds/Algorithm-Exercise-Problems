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
    let pre = 0
    const helper = (root)=>{
    if(root == null) return  
    helper(root.right)
    root.val += pre
    pre = root.val
     helper(root.left)
    }
    helper(root)
    return root
};