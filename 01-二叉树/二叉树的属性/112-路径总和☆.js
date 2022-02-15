
// 缩略版
var hasPathSum = function(root, sum) {
    if(root == null) return false
    if(root.left == null && root.right == null){
        return sum - root.val === 0
    }
    else return hasPathSum(root.left,sum - root.val) || hasPathSum(root.right,sum - root.val)
};

// 详细版
//  不要用累加，要用递减，那样比较简单
// 遍历到一个节点，就减去一个节点的值，如果遍历到叶子节点还是不等于 0 那就不满足
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    //  1.递归参数 根节点和一个计数器判断是否满足条件
    const recursion = (root, num) =>{
        // 2. 终止条件
        if(!root.left && !root.right && num === 0) return true;
        if( !root.left && !root.right) return false;
        // 3. 单层递归逻辑 包含回溯
        // 意思就是先往左边走，看有没有满足条件的，有就返回 true ，没有的话，把 num 加回来，往右边再试一遍
        if(root.left){
            num -= root.left.val;
            if(recursion(root.left, num)) return true;
            num += root.left.val;
        }
        if(root.right){
            num -= root.right.val;
            if(recursion(root.right, num)) return true;
            num += root.right.val;

        }
        return false;

    }
    // 注意递归的时候没有处理根节点，所以我们外部 targetSum 要减去根节点的值
    return recursion(root, targetSum - root.val);
};