/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let flag = true,arr;
    let curr = head;
    while(curr!== null){
        arr.push(curr.val);
    }
    if(arr.length%2 === 0){
        let len = arr.length/2;
    
        for(let i = 0; i<len;i++){
            if(arr[i] !== arr[len-i])
            flag = false;
        }
    
    }
    else flag = false;
   
    
    return flag;
};
// 第二种 快慢指针
const isPalindrome2 = (head) => {
  let fast = head;
  let slow = head;
  let prev = new ListNode();
 //  快慢指针移动 可以画图看 比如说 1 2 3 3 2 1  
 // 最后 prev 在 第一个3；slow在第二个3； fast在null
  while(fast && fast.next){
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
  }
 //  反转后半部分链表 注意要把prev和slow之间断开
 prev.next = null;
 // head2 是一个虚拟头结点
 let head2 = null;
 while(slow){
     const next = slow.next;
     slow.next = head2;
     head2 = slow;
     slow = next;
 }


 // 比较反转后的链表
 while(head && head2){
     if(head.val !== head2.val){
         return false;
     }
     head = head.next;
     head2 = head2.next;

 }
 return true;
  };
  
   