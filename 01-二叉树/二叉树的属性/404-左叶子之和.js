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
    // 迭代法
 var sumOfLeftLeaves = function(root) {
    if(root == null) return 0
    let res = 0
    let queue = []
    queue.push(root)
    // 遍历数组 层序遍历 用一个队列按左右中的顺序来添加 然后shift出来判断
    while(queue.length){
        let   currNode = queue.shift()
        if(currNode.left!==null && currNode.left.left == null && currNode.left.right == null){           
            res += currNode.left.val
        }
        currNode.left&&queue.push(currNode.left)
        currNode.right&&queue.push(currNode.right)
    }
    return res
};

//  递归法
var sumOfLeftLeaves1 = function(root) {
    if(root == null) return 0
    let leftValue = sumOfLeftLeaves(root.left)
    let rightValue = sumOfLeftLeaves(root.right)
    let midValue = 0
    if(root.left != null && root.left.left == null && root.left.right == null){
        midValue = root.left.val
    }
//    注意这个 return 也是在递归里的 图在草稿 156-157
    return   leftValue + rightValue + midValue
};


// 递归法
var sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    const helper = (root,isLeftTree)=>{
         if(!root) return 0;
         if(!root.left && !root.right){
             if(isLeftTree){
                 return root.val
             }else{
                 return 0;
             }
         }
         return helper(root.left,true) + helper(root.right, false)
          
     }
    return  helper(root, false)

};