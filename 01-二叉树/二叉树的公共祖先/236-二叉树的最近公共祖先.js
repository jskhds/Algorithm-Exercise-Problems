/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    // 自下而上地找，适合后序遍历，后序遍历最先处理的一定是叶子节点
    // 终止条件 要么找到了，要么为空
    if(root == null || root === p || root === q) return root;
    // 先在左子树找有没有它们的祖先
    let left = lowestCommonAncestor(root.left, p, q);
    // 再在右子树找有没有它们的祖先
    let right = lowestCommonAncestor(root.right, p, q);

    // 判断
    // 如果左子树也有它们的祖先，右子树也有它们的祖先，说明 root 就是它们深度最深的公共祖先
    if(left && right){
        return root;
    }
    if(!left && !right){
        return null;
    }
    if(!left){
        return right;
    }
    if(!right){
        return left;
    }
};
/**
 
 */
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/c-jing-dian-di-gui-si-lu-fei-chang-hao-li-jie-shi-/