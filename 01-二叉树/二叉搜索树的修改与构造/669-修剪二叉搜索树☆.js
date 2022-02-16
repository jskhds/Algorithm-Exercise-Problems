/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
 var trimBST = function(root, low, high) {
    if(!root) return null;
   // 如果大于  high 说明右边的都不要了，只要修剪左边就行
    if(root.val > high){
        let left = trimBST(root.left, low, high);
        return left;
    }
   //  如果小于 low，说明左边的都不要了，只要修剪右边就行
    if(root.val < low){
        let right = trimBST(root.right, low, high);
        return right;
    }
   //  接住上面修剪好的 left right
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};