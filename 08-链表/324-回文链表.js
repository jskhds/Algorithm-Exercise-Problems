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
    if (head == null || head.next == null) {
      return true;
    }
    let fast = head;
    let slow = head;
    let prev;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = null;  // 断成两个链表
    // 翻转后半段
    let head2 = null;
    while (slow) {
      const tmp = slow.next;
      slow.next = head2;
      head2 = slow;
      slow = tmp;
    }
    // 比对
    while (head && head2) {
      if (head.val != head2.val) {
        return false;
      }
      head = head.next;
      head2 = head2.next;
    }
    return true;
  };
  
   