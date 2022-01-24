/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
// 输入：head = [1,2,3,4,5], k = 2
// 输出：[4,5,1,2,3] 
 var rotateRight = function(head, k) {
    if(k===0 || !head) return head
    let total = 0
    let temp = head
    while(temp){
        total++
        temp = temp.next
    }
   // 计算有效 k 
   k =  k % total
   if(k === 0) return head
   // 双指针
   let slowPath = total - k - 1
   let fast = head
   let slow = head
   while(slowPath-->0){
       slow = slow.next
       fast = fast.next
   }
   while(fast.next){
       fast = fast.next
   }
   let nHead = slow.next
   slow.next = null
   fast.next = head

   return nHead
    
};