/**
 * @param {TreeNode} root
 * @return {number}
 * 递归
一个树的最大深度 = 根节点的高度（即1）+ 左右子树的最大深度中的较大者。
“嗨，maxDepth函数，请帮我计算出我的左右子树的最大深度，我等你的返回结果，我就能算出自己的最大深度了。”
递归的结束条件：当遍历到 null 节点，它们的高度是 0，返回 0。
 */
 var maxDepth = function(root) {
    //  递到不能再递，说明这里高度为 0 开始一层层返回自己的高度
    if(!root) {
         return 0;
     } else {
         const left = maxDepth(root.left);
         const right = maxDepth(root.right);
         return Math.max(left, right) + 1;
     } 
 };


//  用 BFS （相当于层序遍历）
var maxDepth = function(root) {
    let depth = 0;
    if(!root) return depth;
    let queue = [root];
    let cur = null;
    while(queue.length){
        let len = queue.length;
        for(let i = 0;i<len;i++){
            cur = queue.shift();
            cur.left&&queue.push(cur.left)
            cur.right&&queue.push(cur.right)
        }
        // 其实本来应该是还有下一层的时候再加一，也就是 if(queue.length)
        // 但是我的 depth 初始化为 0.所以即使没有下一层了也可以加一
        depth += 1

    }
    return depth
};