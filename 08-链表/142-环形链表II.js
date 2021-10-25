/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    // fast.next 是肯定要判断的，如果等于null 那肯定没有环
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    //    快慢指针相遇，说明有环存在
        if(slow === fast){  
            // 头结点定义一个指针，相遇节点定义一个指针，它们碰头的节点就是环的入口 
            let index1 = fast;
            let index2 = head;
            while(index1 !== index2){
                index1 = index1.next;
                index2 = index2.next;
            }
            return index2;
        }
    }
    return null;
};