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


 /**
 这个解法里面隐藏了回溯，当我们访问到 root == null 返回时，上一个节点的 path 还是当初自己保存的 path，可以自己画来看看
  */
 var binaryTreePaths = function(root) {
    let res = []
    const helper = (root, path)=>{
        if(root == null) return;
        // 到了叶子节点的处理逻辑
        if(root.left == null && root.right == null){
            path += root.val
            res.push(path)
        } 
        // 非叶子节点的处理逻辑
        path += root.val + "->"
        helper(root.left, path)
        helper(root.right, path)
    }
    helper(root, "")
    return res
};