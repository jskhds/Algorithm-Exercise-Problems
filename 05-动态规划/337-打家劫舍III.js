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

var rob1 = function(root) {
    let map = new Map() //map要单独拿出来，不要放在递归里面
    const memoRob= (root)=>{
    if(root == null) return 0; //1
    
    if(map.has(root)) return map.get(root)
    let val1 = root.val//3
     
    if(root.left) val1 += memoRob(root.left.left) + memoRob(root.left.right)//4
    if(root.right) val1 += memoRob(root.right.left) + memoRob(root.right.right)//5
    // 不偷当前父节点
    let val2 = memoRob(root.left) + memoRob(root.right)//6
    map.set(root,Math.max(val1,val2))
    return Math.max(val1,val2)
     }
    
    return memoRob(root)
};

// 动规解法
const rob = (root) => {

    const helper = (root) => {
    //   dp[a,b] dp[0]不偷该节点的最大值，dp[1]偷该节点的最大值
    if (root == null) return [0, 0]; //1
    // 后序遍历：左右中
  
      const left = helper(root.left);
      const right = helper(root.right);
  
      robExcludeRoot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
      robIncludeRoot = root.val + left[0] + right[0];
  
      return [robExcludeRoot, robIncludeRoot];
    };
  
    const res = helper(root);
  
    return Math.max(res[0], res[1]);
  };