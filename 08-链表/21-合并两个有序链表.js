// 迭代法（比较好懂一点）
// 先构建一个虚拟节点用来返回链表
// prev用来比较赋值和移动构建新链表
// 先是比较l1 和 l2 的大小，prev 指向小的那一个，因为小的那一个已经确定了位置，大的还没有，所以小的可以往下移动到自己的next
// 大的留在原地，等next再和它比，确定位置，不管谁大谁小，prev指了之后，都要往下移动，这样才可以延长新链表的长度
// 最后，可能有一个链表还有剩下的值，所以就用 prev.next = l1==null?l2:l1 来确定最后的值是什么
function mergeTwoLists(a,b){
    if(!a || !b) return a? a:b
    let head = new ListNode(0)
    let tail = head
    let aPtr = a
    let bPtr = b
    while(aPtr && bPtr){
        if(aPtr.val <= bPtr.val){
            tail.next = aPtr
            aPtr = aPtr.next
        }else{
            tail.next = bPtr
            bPtr = bPtr.next
        }
        // 把 tail 往下移动
        tail = tail.next
    }
    tail.next = aPtr? aPtr:bPtr
    return head.next
}
// 递归法
var mergeTwoLists = function(l1,l2) {
    // 递归
    if(l1 == null) return l2
    if(l2 == null) return l1
    if(l1.val <= l2.val){
         l1.next =  mergeTwoLists(l1.next,l2)
         return l1
    }else{
         l2.next =  mergeTwoLists(l1,l2.next)
         return l2
    }
    
}; 