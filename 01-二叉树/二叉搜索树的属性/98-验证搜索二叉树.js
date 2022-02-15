/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 二叉树搜索树的中序遍历是递增序列（不能相等）
 var isValidBST = function(root) {
    const res = [];
   const inorder = (root) =>{
       if(!root){
           return;
       }
       inorder(root.left);
       res.push(root.val);
       inorder(root.right);
   }
   inorder(root);
   for(let i = 1;i<res.length;i++){
        if(arr[i-1]>=arr[i]){
            return false
        }
   }

   return true
};


// 递归
var isValidBST = function(root) {
    //  递归
    let pre = null;
    const inorder = (root)=>{
        // 注意要用中序遍历
        if(root == null) return true;  
        // 访问左子树
        let left = inorder(root.left);
        // 处理当前节点
        if(pre !== null && pre.val >= root.val) 
            return false;
        pre = root;
        // 需要继续处理右子树
        let right = inorder(root.right);
        return right&&left;
    }
    return inorder(root);
};