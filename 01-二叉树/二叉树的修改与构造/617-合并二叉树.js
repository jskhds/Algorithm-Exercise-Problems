/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    //  传入两个节点，返回合并之后的根节点
    if(root1 == null) return root2;
    if(root2 == null) return root1;
    // 单层递归逻辑
    root1.val += root2.val;
    // 递归调用 前序遍历
    root1.left = mergeTrees(root1.left,root2.left);
    root1.right = mergeTrees(root1.right,root2.right);
    return root1;

};

// 不修改输入树的结构
var mergeTrees = function(root1, root2) {
    //    不修改原二叉树
        if(!root1 && !root2){
            return null;
        }
        let root = new TreeNode((root1 == null?0:root1.val) + (root2 == null?0:root2.val));
        root.left = mergeTrees(root1 == null?null:root1.left,root2 == null?null:root2.left);
        root.right = mergeTrees(root1== null?null:root1.right,root2 == null?null:root2.right);
        return root;
    
        
    };