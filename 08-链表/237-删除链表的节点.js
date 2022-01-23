/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    //  只给了一个待删除的节点node
    // 先用 node 的下一个把其值覆盖
    node.val = node.next.val
    // 然后跳过下一个，node 指向其下一个的下一个
    node.next = node.next.next
};