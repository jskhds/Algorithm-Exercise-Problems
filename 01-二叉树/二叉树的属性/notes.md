110 判断平衡二叉树
<!-- 这道题，真的很妙，还需要再看看 
    顺便有一个写递归的博客，很精巧
    https://lyl0724.github.io/2020/01/25/1/
-->
`
var isBalanced = function(root) {
    const helper = (root)=>{
        // 1.终止条件 如果为空说明高度为 0
        if(!root) return 0
        // 2.返回值 当前树的高度以及其左右子树是否为平衡二叉树
        let lh = helper(root.left)
        let rh = helper(root.right)
        // 3.单层逻辑 左子树是二叉树 右子树是二叉树 并且左右子树高度差小于等于 1
        if(lh >= 0 && rh >=0 && Math.abs(lh-rh)<=1){
            return Math.max(lh,rh) + 1
        }else{ 
            return -1
        }      
    }
    return helper(root)>=0    
};

`