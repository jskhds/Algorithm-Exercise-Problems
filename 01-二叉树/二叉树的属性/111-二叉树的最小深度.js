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
// 递归法
 var minDepth = function(root) {
    if(!root) 
        return 0;
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    // 19-26这一段是为了预防 子树不满的情况 比如说[1,2,3,4,5,6,7,null,null,8,9,10,11] 
    // 每一颗子树都是满的，所以不要这一段也可以，但是像示例2这种，左子树是空的，
    // 如果不判断，就会直接返回左子树+1 也就是深度为1

    
    // 左子树为空，右子树不为空
    if(root.left===null &&root.right!==null){
        return right + 1;
    }
    // 右子树为空，左子树不为空
    if(root.left!==null&&root.right===null){
         return left + 1;
    }
    return Math.min(right,left) + 1;
        
    
    
};

// 迭代法 只要一碰到左右孩子都为空时 才能说明到了遍历的最低点
var minDepth = function(root) {
    // BFS 只要没有左右孩子，说明在短路径
    if(!root) return 0;
    let depth = 1;   
    let queue = [root];
    let cur = null;
    while(queue.length){
        let len = queue.length;
        for(let i = 0;i<len;i++){
            cur = queue.shift();
            if(!cur.left && !cur.right){
                return depth;
            }
            cur.left&&queue.push(cur.left);
            cur.right&&queue.push(cur.right);
        }
        if(queue.length) depth++;

    }
    return depth;
};

