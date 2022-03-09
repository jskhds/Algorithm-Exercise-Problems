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
 var reverseList = function(head) {
    let currNode =  head;
    let prev = null;
    while(currNode){
        const next = currNode.next;
        currNode.next = prev;
        prev = curr;
        curr = next;
    }  
    return prev;   
};
// 递归法
var reverseList1 = function(head) {
     if(head == nul || head.next == null){
        return head;
     }
     const p = reverseList1(head.next);
     head.next.next = head;
     head.next = null;
     return p;

    

     
     
};

 
