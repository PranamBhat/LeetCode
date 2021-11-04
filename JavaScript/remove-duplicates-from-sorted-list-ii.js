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

var deleteDuplicates = function(head) {

var newHead = new ListNode(0);
var now = newHead;
var tmp = head;
var val = 0;
  
  while (tmp) {
    val = tmp.val;
    if (tmp.next && tmp.next.val === val) {
      tmp = tmp.next;
      while (tmp && tmp.val === val) tmp = tmp.next;
    } else {
      now.next = tmp;
      now = tmp;
      tmp = tmp.next;
      now.next = null;
    }
  }
  
  return newHead.next;
    
};
