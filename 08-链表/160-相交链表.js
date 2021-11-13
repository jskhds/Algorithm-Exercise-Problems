/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// [4,1,8,4,5] [5,6,1,8,4,5] 相交点在1
// 先算出差值 然后一个指针在短链表的头 一个指针在长链表的差值后一个 再共同往下移动
// 如果两个链表相交，那么相交点之后的长度是相同的。我们需要做的事情是，让两个链表从同 距离末尾 同等距离 的位置开始遍历。这个位置只能是较短链表的头结点位置。


 var getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA),lenB = getLength(headB);
    let curA = headA;
    let curB = headB;
    if(lenA>lenB){
        for(let i =0;i<lenA-lenB;i++){
            curA  = curA.next;
        }       
    }
    else{
        for(let i =0;i<lenB-lenA;i++){
            curB  = curB.next;
        }
    }
    while(curA !== curB){
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
};

function getLength(head){
    let cur = head;
    let len = 0;
    while(cur){
        len++;
        cur = cur.next;
    }
    return len;
}

// 
function getIntersectionNode( headA, headB) {
    if (headA == null || headB == null) return null;
    pA = headA, pB = headB;
    while (pA != pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }
    return pA;
}


