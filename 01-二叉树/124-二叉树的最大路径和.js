/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    function dfs(root){
        // 如果当前 root 为空，直接返回不需要再往下了
        if(root == null) return 0
        // 左子树和右子树对当前节点的贡献
        let left = dfs(root.left)
        let right = dfs(root.right)
        // 以当前节点为根节点的路径可以左右都要,这个地方在遍历，所有的节点作为根节点的情况都考虑到了，所以这里才是答案的所在，
        // maxSum 也在这里更新
        let curSum = root.val + left + right
        maxSum = Math.max(curSum, maxSum)
        // 当前节点对外部的贡献 此时就不能左右都要了，只能选一条走
        let contriSum = root.val + Math.max(0,left,right)
        return contriSum<0? 0: contriSum

    }
    dfs(root)
    return maxSum
};