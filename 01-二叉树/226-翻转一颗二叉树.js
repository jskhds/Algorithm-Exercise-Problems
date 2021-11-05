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
// 前序遍历递归翻转 
 var invertTree = function(root) {
    if(root === null) return null;
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        // 把上一层的节点交换完之后，把头结点传进来，继续翻转它们各自的子节点
        invertTree(root.left);
        invertTree(root.right);
        return root;
};

 
// 后序遍历
var invertTree2 = function(root) {
     // base case
  if (root == null) {
    return null;
  }
  // 让左右子节点继续翻转它们的子节点
  invertTree(root.left);
  invertTree(root.right);
  // root 节点需要交换它的左右子节点
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  return root;

 
};