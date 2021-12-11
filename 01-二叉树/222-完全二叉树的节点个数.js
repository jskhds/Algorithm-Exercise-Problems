  // 普通二叉树的方式 按层序遍历把节点都加进来 然后flat算长度
var countNodes = function(root) {
  
    let res = [];
    if(!root) return 0;
    let queue = [root];
    while(queue.length>0){
        let len = queue.length;
        let list = [];
        for(let i = 0;i<len;i++){
            let curr = queue.shift();
            list.push(curr.val)
            curr.left&&queue.push(curr.left);
            curr.right&&queue.push(curr.right);
            
        }
        res.push(list);
    }
    
    return res.flat(2).length;
};
// 把完全二叉树分成一个有一个满二叉树的方法
var countNodes = function(root) {
  // 满二叉树的办法
  if(!root) return 0;
  let leftHeight = 0;
  let rightHeight = 0;
  let left = root.left;
  let right = root.right;
  //  算满二叉树的节点数
  while(left){
      left = left.left;
      leftHeight++;
  }
  while(right){
      right = right.right;
      rightHeight++;
  }
  
  if(leftHeight===rightHeight){
      return Math.pow(2,leftHeight+1)-1;
  }
  // 碰到不是满二叉树时
  else{
      // 把完全二叉树分成一个有一个满二叉树来算 一层一层往下走 然后再一级一级return
      return countNodes(root.left) + countNodes(root.right) + 1;
  }

};

