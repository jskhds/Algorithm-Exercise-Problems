/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(left == right) return head;
     let dummy = new ListNode(-1);
     dummy.next = head;
     let pre = dummy;
    // left 和 right 是两个index
    // 找到left的前一个节点设为leftNode  
    while(left--  > 1){
         pre = pre.next;
    }
    // 找到right节点
    let rightNode = dummy;
    while(right-- >0){
        rightNode = rightNode.next;
    }

    // 切断链表
    let leftNode = pre.next;
    let currNode = rightNode.next;
    pre.next = null;
    rightNode.next = null;
   
     
    //  反转要反转的部分
     reverse(leftNode);
    // 处理前后两个节点的方向
    pre.next = rightNode;
    leftNode.next = currNode;
    
     

return dummy.next;
};


function reverse(head){
    let prev = null;
    let currNode =head;
    while(currNode){
        const next = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = next;
    }
    return head;
}


var reverseBetween = function(head, left, right) {
    if(!head) return head
    let dumyhead = new ListNode(-1000, head)
    let pre = dumyhead 
    for(let i = 0; i < left-1; i++){
        pre = pre.next
    }
    
    let cur = pre.next 
   
    for(let i = 0; i < right-left; i++){
        let val = cur.next.val 
        let node = new ListNode(val) 
        cur.next = cur.next.next 
        let next = pre.next 
        pre.next = node 
        node.next = next
    }
    
    return dumyhead.next

}