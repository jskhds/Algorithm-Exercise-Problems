var lowestCommonAncestor = function(root, p, q) {
    // 节点为空 或者 等于 p 或者等于 q 直接返回当前节点
     if(root == null || root === p|| root === q) return root
    //  不满足以上条件 说明要继续往下走 先递归左子树
    let left = lowestCommonAncestor(root.left,p,q)
    //再递归右子树
    let right = lowestCommonAncestor(root.right,p,q)
    // 如果说 既不在左子树也不在右子树 返回空
    if(!left && !right) return null
    // 不在左子树  在右子树 返回右节点
    if(!left && right) return right
    // 不在右子树在左子树 返回左节点
    if(!right && left) return left
    // 都不在 返回 root
    return root
      



};