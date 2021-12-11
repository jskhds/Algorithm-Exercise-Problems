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
 * @return {number[][]}
 */

 var levelOrder = function(root) {
    if(!root || root == 0) return [];
    let res = [];
     // 先从层级 0 开始 root是根节点的值
     dfs(root,0);
    function dfs(currentNode,level){
        // 1.如果说 这一层有数 第一步 先加上[] 然后赋值
        if(currentNode !== null){
             if(!res[level]) res.push([]);
            // 把currentNode的值加给res[level]
            res[level].push(currentNode.val);
        }
       
        // 如果currentNode左边的值不等于空 说明有下一个节点 
       if(currentNode.left !== null){
                // level 不能在外层自加 不然会level值 影响其它同级节点的判断
                dfs(currentNode.left,level+1)
       }
    //    如果currentNode右边的值不等于空 说明有下一个节点 
       if(currentNode.right !== null){
           
            // 把level值提升后 再对这个节点进行查找
            dfs(currentNode.right, level+1)

       }
    } 
    
    return res;
};

//  层序遍历 从上到下 从左到右
var levelOrder1 = function(root) {
    let res = [];
    if(!root) return res;
   //  queue 存放每一层的值
   let queue = [root];
    while(queue.length>0){
        let len = queue.length;
        let list = [];
       //  把同一层queue的每一个节点加进list的同时，要把这一层各个节点下一级的元素添加到queue
       for(let i = 0;i<len;i++){
           let curr = queue.shift();
           list.push(curr.val);
           curr.left&&queue.push(curr.left);
           curr.right&&queue.push(curr.right); 
       }
       res.push(list);
    }
   return res;
};



























 /*var levelOrder = function(root) {
    if(!root || root.length == 0){
        return [];
    }
    var result = [];  
    function dfs(currNode,level){
        if(currNode != null){
            (!result[level]) && (result[level] = []);
            result[level].push(currNode.val);
            if(currNode.left != null){
                dfs(currNode.left,level+1);
            }
            if(currNode.right != null){
                dfs(currNode.right,level+1);
            }           
        }
    }
    dfs(root,0);
    return result;
};*/

