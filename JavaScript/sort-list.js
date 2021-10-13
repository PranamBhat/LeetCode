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

var sortList = function(head) {
  if (!head || !head.next) 
      return head;
    
  var slow = head;
  var fast = head;
  var prev = null;
    
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  return merge(sortList(head), sortList(slow));
};

var merge = function (list1, list2) {
  var p1 = list1;
  var p2 = list2;
  var newHead = new ListNode(0);
  var now = newHead;
  while (p1 || p2) {
    if (!p1 || !p2) {
      now.next = p1 || p2;
      break;
    } else if (p1.val < p2.val) {
      now.next = p1;
      p1 = p1.next;
    } else {
      now.next = p2;
      p2 = p2.next;
    }
    now = now.next;
    now.next = null;
  }
    
  return newHead.next;
    
};
