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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let res = [];
    function getPath(curNode,path){
        if(curNode.left == null && curNode.right ==null){
            path += curNode.val;
            res.push(path);
            return;
        }
        path += curNode.val + '->';
        curNode.left&&getPath(curNode.left,path);
        curNode.right&&getPath(curNode.right,path);
    }
    getPath(root,'');
    return res;
};