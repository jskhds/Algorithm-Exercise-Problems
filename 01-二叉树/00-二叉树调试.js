function TreeNode(val) {
    this.val = val
    this.left = this.right = null
  }
  
  const creatTree=function(src) {
    let root = new TreeNode()
    let result = new TreeNode()
    result = null
    let queue = []
    for (let i = 0; i < src.length; i++) {
      if (i == 0) {
        root = new TreeNode(src[i])
        result = root
        queue.push(root)
      }
      if (queue.length) {
        root = queue.shift()
      } else {
        break
      }
      if (i + 1 < src.length && src[i + 1] !== null) {
        root.left = new TreeNode(src[i + 1])
        queue.push(root.left)
      }
      if (i + 2 < src.length && src[i + 2] !== null) {
        root.right = new TreeNode(src[i + 2])
        queue.push(root.right)
      }
      i = i + 1
    }
    return result
  }
  
  
module.exports = creatTree;
  
let root = creatTree([1,2,3,4,5,null,7]);

var isCompleteTree = function(root) {
  if (!root) {
    return true
}
const queue = [{ node: root, index: 1 }]
let count = 0
while (queue.length) {
    const temp = queue.shift()
    const node = temp.node
    const index = temp.index
    // 用来判断索引位置节点是否存在，如果index !== ++count代表左右子树层级相差超过1层，或者最后一层没有左节点却有右节点
    if (index !== ++count) {
        return false
    }
    // 层序遍历过程中，用index来维护节点索引，如果根节点index为1，那么一个节点索引是index,那他的左孩子索引是index * 2,右孩子索引是index * 2 +1
    node.left && queue.push({ node: node.left, index: index * 2 })
    node.right && queue.push({ node: node.right, index: index * 2 + 1 })
}
return true
};
const res = isCompleteTree(root);
console.log(res);

  