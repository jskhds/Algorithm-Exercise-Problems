/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
    // 1.确定参数(传入一个数组)和返回值  
    // 2.确定终止条件 传入的数组只有一个数的时候，其实就是节点值
    let node = new TreeNode()
    if(nums.length === 1){
        node.val = nums[0]
        return node
    }
    // 3.确定单层递归逻辑
    let maxValue ,maxValueIndex   
    // 先构造中间节点，然后左子树，右子树（前序遍历）
    // 找到最大数以及对应的索引作为分割点   区间 左闭右开
    maxValue = Math.max(...nums)
    maxValueIndex = nums.indexOf(maxValue)
    node.val = maxValue
    // 找到左子树
    if(maxValueIndex>0){
        node.left = constructMaximumBinaryTree(nums.slice(0,maxValueIndex ))
    }
    // 找到右子树
    if(maxValueIndex<nums.length-1){
        node.right = constructMaximumBinaryTree(nums.slice( maxValueIndex + 1))
    }
    return node
};

// 自己写的，我每次遍历都是从头到尾，其实可以每次用左右指针来限制范围，但我觉得没什么必要
var constructMaximumBinaryTree = function(nums) {
    const recursion = (nums) => {
        if(!nums.length) return null;
        let maxNum = nums[0];
        let index;
        for( let i = 0;i<nums.length;i++){
            if(maxNum <= nums[i]){
                maxNum = nums[i];
                index = i;
            }
        }
        let root = new TreeNode(maxNum);
        root.left = recursion(nums.slice(0, index));
        root.right = recursion(nums.slice(index + 1));
        return root;
    }
    return recursion(nums)
};