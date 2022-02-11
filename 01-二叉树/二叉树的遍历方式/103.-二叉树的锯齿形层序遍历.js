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

 var zigzagLevelOrder = function(root) {
    if(!root || root == 0) return [];
    let res = [];
     // 先从层级 0 开始 root是根节点的值
    let res= dfs(root,0); 
    let res= order(res); 
    return res;
};

// 先遍历 得到每个节点的元素

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

// 2 再排序
function order(res) {
  for(level=0;level<res.length;level++){
    let temp =0;   
    if(level%2 !==0 ){
        len =res[level].length-1;
        for(i=0;i<1;i++)
      {
        temp = res[level][i];
        res[level][i]=res[level][len-i];
        res[level][len-i] = temp;
      } 
    }
  }
        
    
    
return res;

}



























