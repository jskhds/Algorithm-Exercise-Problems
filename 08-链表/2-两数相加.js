/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0)// 虚拟头结点
    let cur = dummy 
    let carry = 0  // 进位
    let sum = 0 //两数之和
    while(l1!=null || l2!=null){
        let a = l1 == null?0:l1.val
        let b = l2 == null?0:l2.val
       //  处理两数之和
        sum = a + b + carry
         
        if(sum>9){
           sum = sum - 10
           carry = 1
        }else{
            carry = 0
        }
       
       //  处理节点
       cur.next = new ListNode(sum)
       cur = cur.next
        if(l1!=null){
            l1 = l1.next
        }
        if(l2!=null){
            l2 = l2.next
        } 
    }
    if(carry === 1)  cur.next = new ListNode(carry)   
    return dummy.next
};