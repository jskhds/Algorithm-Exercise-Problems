/**
 * BST的中序遍历是升序的，因此本题等同于根据中序遍历的序列恢复二叉搜索树。
 * 因此我们可以以升序序列中的任一个元素作为根节点，以该元素左边的升序序列构建左子树，
 * 以该元素右边的升序序列构建右子树，这样得到的树就是一棵二叉搜索树啦～ 
 * 又因为本题要求高度平衡，因此我们需要选择升序序列的中间元素作为根节点奥～
 */
/**
 * 
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    // 最好是定义左右指针来构造
    const helper = (nums, left, right) =>{
        if(left > right){
            return null;
        }
        let index = (left + right)>>>1;
        let root = new TreeNode(nums[index]);
        // 注意这里面的参数是 left 和 right 不要用 0  和 nums.length 来代替
        root.left = helper(nums, left, index - 1);
        root.right = helper(nums, index + 1, right);
        return root;
    }
    return helper(nums, 0, nums.length - 1);
    
};
