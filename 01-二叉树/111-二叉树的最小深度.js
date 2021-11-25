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
    // 19-26这一段是为了预防 子树不满的情况 比如说[1,2,3,4,5,6,7,null,null,8,9,10,11] 每一颗子树都是满的，所以不要这一段也可以，但是像示例2这种，左子树是空的，如果不判断，就会直接返回左子树+1 也就是深度为1
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

// 迭代法 只有当左右孩子都为空时 才能说明到了遍历的最低点
var minDepth = function(root) {
    // 层序遍历 还需要满左右孩子都为空才能说明到了最低深度
    if(!root) return 0;
    let queue = [root];
    let res = 0;
    while(queue.length>0){
        let len = queue.length;
        res++;
        for(let i = 0;i<len;i++){
            // shift删除数组的第一个元素  并返回数组
            let curr = queue.shift();
            curr.left&&queue.push(curr.left);
            curr.right&&queue.push(curr.right); 
            if(!curr.left&&!curr.right){
                return res;
            }
        }
    }
};

