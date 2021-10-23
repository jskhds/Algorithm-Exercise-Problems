/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let dummy = new ListNode();
     dummy.next = head;
     let prev = dummy,curr = head; 
     while(curr){
         if(curr.val == val){
             prev.next = curr.next;
         }
         else{
             prev = prev.next;
         }
         curr = curr.next;
     }
     // dummy.next 就是dummy后面的一串 不是dummy的下一个值
     return dummy.next;
 };

 var removeElements1 = function(head, val) {
    if (head === null) {
            return head;
        }
        head.next = removeElements(head.next, val);
        return head.val === val ? head.next : head;
};


   
