// 在递归的时候比，另起节点
// 我们在新起节点的时候，声明为 null就行
var getMinimumDifference = function(root) {
    // 辅助数组
    let res =Infinity;  
    let pre = null;
    const inorder = (root) =>{
        if(!root) return;
        inorder(root.left);
        if(pre !== null){
            res = Math.min(Math.abs(root.val - pre.val), res);
        }
        pre = root;  // per 和 root 是按照中序遍历的顺序在动的，比如说示例 1 [1, 2, 3, 4, 6]pre 先是 null root 是 1，接下来就是 pre = 1, root = 2; pre = 2, root = 3;
        inorder(root.right);
    }
   inorder(root);
   return res;
    
};
// 放到数组里面比
var getMinimumDifference = function(root) {
    // 二叉搜索树一般都采用中序遍历（递增数组）
   
    let res = []
    function inOrder(root){
        if(root == null) return 
        inOrder(root.left)
        res.push(root.val)
        inOrder(root.right)
    }
    inOrder(root)
    let minValue  = res[1] - res[0];
    for(let i = 2;i<res.length;i++){
        let temp = Math.abs(res[i]-res[i-1])
        minValue  = minValue<temp?minValue:temp
    }
    return minValue
};