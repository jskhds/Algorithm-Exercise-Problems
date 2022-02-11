var isSymmetric = function(root) {
    if(!root) return true;
    function recursion(p,q) {
        // 返回值 Boolean
        // 递归的终止条件
        if(p === null && q === null) return true;
        if(p === null || q === null) return false;
        if(p !== q) return false;

        // 单层递归 
     return   recursion(p.left,q.right) && recursion(p.right,q.left);

        
    }
    return  recursion(root.left,root.right);
   
};

// 
const isSymmetric = (root) => {
    if (root == null) return true; 
  
    const queue = [];
    queue.push(root.left, root.right);  // 起初入列两个子树
  
    while (queue.length) {  // 队列清空就结束，没有节点可入列了
      const levelSize = queue.length; // 当前层的节点个数
      for (let i = 0; i < levelSize; i += 2) { // 当前层的节点成对出列
        const left = queue.shift();   
        const right = queue.shift();  // 出列一对节点
        if ((left && right == null) || (left == null && right)) { // 一个存在 一个不存在
          return false;
        }
        if (left && right) { // 两个都存在
          if (left.val != right.val) { // 节点值不同，不对称
            return false;
          }
          queue.push(left.left, right.right); // 推入下一层的一对节点
          queue.push(left.right, right.left); // 推入下一层的一对节点
        }
      }
    }
    return true; // bfs结束，始终没有返回false，则返回真
  };
  
//   作者：xiao_ben_zhu
//   链接：https://leetcode-cn.com/problems/symmetric-tree/solution/di-gui-zhan-mo-ni-di-gui-bfs-by-hyj8/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。