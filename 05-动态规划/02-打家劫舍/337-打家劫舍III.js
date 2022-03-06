/**
 * 
 * @param {*} root 
 * @returns 
 */
var rob = function(root) {
    // 后序遍历 左右中 因为我们要走到最后的节点开始一级一级返回，所以要用后序遍历
    // 暴力递归 会超时
    // 递归终止条件，如果本身为空返回0值，如果左右为空返回自己的值
    if(root == null) return 0; //1
    if(root.left == null && root.right == null) return root.val//2
    // 偷当前父节点 那么就跳过左右子节点 去偷孙子（一层上的没有限制，都可以偷）
    let val1 = root.val//3
    // val1 由左节点的子节点值加上右节点的子节点值组成
    if(root.left) val1 += rob(root.left.left) + rob(root.left.right)//4
    if(root.right) val1 += rob(root.right.left) + rob(root.right.right)//5
    // 不偷当前父节点
    let val2 = rob(root.left) + rob(root.right)//6
    return Math.max(val1,val2)
};


// 记忆递归 用map

var rob = function(root) {
  let map = new Map();
  // 记忆化递归法 加一个 map （就多两行代码，到每一个 root 都判断一下 map 里有没有，算完一个之后map set 一个）后序遍历
  const helper = (root)=>{
      if(!root) return 0;
      if(!root.left && !root.right) return root.val;
      if(map.has(root)) return map.get(root);
      // 偷父节点的话，就只能越级往下偷
      let val1 = root.val; // 先把父节点包含起来
      if(root.left) val1 += helper(root.left.left) + helper(root.left.right);
      if(root.right) val1 += helper(root.right.left) + helper(root.right.right);
      // 不偷父节点
      let val2 = helper(root.left) + helper(root.right);
      map.set(root, Math.max(val1,val2));
      return Math.max(val1, val2);
  }
  
  return helper(root);

};

var rob = function(root) {
  // 动态规划
  // dp[0],dp[1]分别代表不偷父节点 和 偷父节点所得到的金额
  const helper = (root)=>{
      if(!root) return [0,0];
      let left = helper(root.left);
      let right = helper(root.right);
      let unStealP = Math.max(left[0],left[1]) + Math.max(right[0],right[1]);
      let stealp =  root.val +left[0] + right[0];
      return [unStealP, stealp];
  }
  const res = helper(root);
  return Math.max(...res);
};