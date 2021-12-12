// 便于理解 重新声明一个node
var searchBST = function(root, val) {
    //  确定参数和返回值 root,val 返回 符合条件的 root  
    // 确定中止条件
    if(root == null || root.val === val) return root // 1
    // 确定单层递归逻辑 二叉搜索树 左子树节点均小于根节点，右子树节点均大于根节点
    let node = new TreeNode()
    if(val < root.val)  node =  searchBST(root.left,val) //2
    if(val > root.val) node =  searchBST(root.right,val)   //3
    return node //4
};

// 不用另外声明node的代码  
var searchBST = function(root, val) {
    //  确定参数和返回值 root,val 返回 符合条件的 root  
    // 确定中止条件
    if(root == null || root.val === val) return root // 1
    // 确定单层递归逻辑 二叉搜索树 左子树节点均小于根节点，右子树节点均大于根节点
    if(val < root.val)  return searchBST(root.left,val) //2
    if(val > root.val) return searchBST(root.right,val)   //3
    return null //4
};

// 迭代法
var searchBST = function(root, val) {
    // 迭代
        while(root != null){
            if(root.val > val) root = root.left
            else if(root.val < val) root = root.right
            else return root
        }
        return root
    };
