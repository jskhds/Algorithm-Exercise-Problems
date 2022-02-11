//  把左右两个子树当做同一颗树的左右两个节点来处理就行，和判断是不是镜像除了比较节点的组合不一样其它都一样
var isSameTree = function(p, q) {
    const helper = (left,right)=>{
        if(!left && !right) return true;
        if(!left|| !right) return false;  
        return left.val === right.val && helper(left.left,right.left) && helper(left.right,right.right)
    }
    return helper(p,q)
};