// 1.两个两个的合并
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) { 
    // 两个两个的合并
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
    // 有一个 case 是 [] 最终返回 [] 所以 res 初始值为 null
    let res = null
    for(let i = 0;i<lists.length;i++){
         res = mergeTwoLists(res,lists[i])
    }
    return res
};


// 2.分治
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) { 
    // 2.分治合并
      return merge(lists, 0, lists.length - 1);
    }

    // 分治 找到要合并的两个链表
    function merge(lists, l , r){
        if(l === r){
        //   如果 l 和 r 的大小一样 return lists[l] 注意是字母 l 不是数字 1
            return lists[l]
        }

        if(l > r){
            return null
        }
        let mid = (l+r)>>1
        return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
    }

    // 单层两两合并
    function mergeTwoLists( a,  b) {
        if (a == null || b == null) {
            return a != null ? a : b;
        }
        let head = new ListNode(0);
        let tail = head, aPtr = a, bPtr = b;
        while (aPtr != null && bPtr != null) {
            if (aPtr.val < bPtr.val) {
                tail.next = aPtr;
                aPtr = aPtr.next;
            } else {
                tail.next = bPtr;
                bPtr = bPtr.next;
            }
            tail = tail.next;
        }
        tail.next = (aPtr != null ? aPtr : bPtr);
        return head.next;
    }

 
     
