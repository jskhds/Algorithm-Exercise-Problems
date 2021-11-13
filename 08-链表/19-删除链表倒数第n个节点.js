/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 1.快慢指针法 快指针先走n步 然后快慢指针一起走直到快指针走到最后一个 然后slow.next = slow.next.next;即可
 var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    for(let i = 0;i<n;i++){
        if(fast!==null&&fast.next!==null)
        fast = fast.next;
    }
    while(fast.next!==null){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};
// 得到链表长度(另外写一个函数 不然节点会被改变)之后删除
var removeNthFromEnd1 = function(head, n) {
    let len = getLength(head);
    console.log(len)
    let dummy = new ListNode();
    dummy.next = head; 
    let cur = dummy;
    // 要删除的数倒数第n个就是正数第 len-n+1 所以先移动到 len-n次
    for(let i = 0;i<len-n;i++){
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return dummy.next;
};
var getLength = function(head){
    // len要从0开始算 因为每个head都要往下移动 所以每个节点都被遍历到了
    // 如果len=1，那么while(head.next!==null)
    let len = 0;
    while(head){
        head = head.next;
        len++;
    }
    return len;
}