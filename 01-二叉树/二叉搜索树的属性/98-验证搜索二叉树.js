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