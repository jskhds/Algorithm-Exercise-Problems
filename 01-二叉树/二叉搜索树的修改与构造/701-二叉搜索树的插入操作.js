/**
 * 给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，将值插入二叉搜索树。 
 * 返回插入后二叉搜索树的根节点。 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
*注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 任意有效的结果 。

 */
// 我们的插入方式只要找到符合条件空节点插入就行了，不用考虑重构搜索树的情况
var insertIntoBST = function(root, val) {
    const helper = (root,val)=>{
         if(root == null){ // 1
             let node = new TreeNode(val)  
             if(val>parent.val) parent.right = node
             else parent.left = node
             return  
         }
         parent = root//2
         if(root.val > val) helper(root.left,val)//3
         if(root.val<val) helper(root.right,val)//4
         return//5
     }
    let parent = new TreeNode(0)
    if(root == null){
        root = new TreeNode(val)
    }
    helper(root,val)
    return root
};



// 简洁版
var insertIntoBST = function(root, val) {
    if(!root){
        // 这个地方的 return 要给上一级的接住，上一级过来的时候是 xxx.left = ? 或者 xxx.right = ?，返回的 new node 就是赋值给它们其中一个的
        return new TreeNode(val);
    }
    if(root.val > val){
        root.left = insertIntoBST(root.left, val);
    }
    if(root.val < val){
        root.right = insertIntoBST(root.right, val);

    }
    return root;
};

// 迭代  p 随着 cur 在走， cur 跟着 val 的大小在走
// cur 走完后，就可以用 p.val 和 val 的大小来插入了
var insertIntoBST = function(root, val) {
    if(root == null){
        root = new TreeNode(val)
    }else{
        let p = new TreeNode(0)
        let cur = root
        while(cur){
            p = cur
            if(cur.val > val){
                cur = cur.left
            }else{
                cur = cur.right
            }
        }
        let node = new TreeNode(val)
       if(p.val>val){
        p.left = node
    }else{
        p.right = node
    }
    }
    
    return root

};
