/**
 * 用一个 pre 节点来记录前一个节点的值，反中序遍历累加即可
 * 
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

// 迭代
