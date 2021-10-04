var isSymmetric = function(root) {
// 双指针比较？
    if(!root) return true;

    function recursion(p,q) {
        // 返回值 Boolean
        // 递归的终止条件
        if(p === null && q === null) return true;
        if(p === null || q === null) return false;
        if(p !== q) return false;

        // 单层递归 
     return   recursion(p.left,q.right) && recursion(p.right,q.left);

        
    }
    return  recursion(root.left,root.right);
   
};