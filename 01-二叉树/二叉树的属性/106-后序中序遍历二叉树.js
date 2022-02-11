/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * 可以参考一下106的c++代码 更清楚
 */
 var buildTree = function(inorder, postorder) {
    if(!inorder.length) return null
    const rootVal = postorder.pop()
    let delimiterIndex = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal)
    root.left = buildTree(inorder.slice(0,delimiterIndex),postorder.slice(0,delimiterIndex))
    root.right = buildTree(inorder.slice(delimiterIndex + 1),postorder.slice(delimiterIndex))
    return root
};