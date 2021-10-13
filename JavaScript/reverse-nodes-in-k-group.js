/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function(head, k) {
  if (!head || k < 2) return head;
  
  var count = 0;
  var now = head;
  var last = head;
  var tmp = null;
  
  while (now && count < k) {
    now = now.next;
    count++;
  }
  
  if (count === k) {
    now = reverseKGroup(now, k);
    while (count-- > 0) {
      tmp = last.next;
      last.next = now;
      now = last;
      last = tmp;
    }
    last = now;
  }
  
  return last;
};
