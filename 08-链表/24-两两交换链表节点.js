/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代法 用虚拟头节点
 var swapPairs = function(head) {  
    let dummy = new ListNode(0,head);
    let cur =dummy;
    while(cur.next &&cur.next.next){
        let next = cur.next;
        let next1 = cur.next.next.next;
        cur.next = cur.next.next;
        cur.next.next = next;
        cur.next.next.next = next1;
        cur = cur.next.next;
    }
       
        
    
    return dummy.next;
};
// 递归
