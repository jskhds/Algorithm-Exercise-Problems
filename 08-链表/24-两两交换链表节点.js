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
    while(cur.next!==null&&cur.next.next!==null){
        let next = cur.next;
        let next1 = cur.next.next.next;

        cur.next = cur.next.next;
        cur.next.next = next;
        cur.next.next.next = next1;

        cur = cur.next.next;
    }
       
        
    
    return dummy.next;
};

// 递归法  https://lyl0724.github.io/2020/01/25/1/
var swapPairs = function(head) {
    if(!head || !head.next){
       return head;
    }
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head
    return next  
};