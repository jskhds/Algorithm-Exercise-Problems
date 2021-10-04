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
// 已经升序排好了 所以重复的数都是挨着的
 var deleteDuplicates = function(head) {
    if(!head) return head;
    // 定义一个cur指针
    let cur = head;
    while(cur.next){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next;
        }
        else{
          cur =  cur.next;
        }
    }
    return head;
};



  