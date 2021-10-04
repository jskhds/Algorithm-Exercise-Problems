// 二叉树的中序遍历是升序排列 所以中序遍历找到第k个就行
var kthSmallest = function(root, k) {
    let res = null;
    let i = 0;
   function recursion(root,k) {
        if(!root) return;
        recursion(root.left,k); 
        i++;          
        if(i===k) { res = root.val; return}         
        recursion(root.right,k);
   }
   recursion(root,k);
   return res;
};

