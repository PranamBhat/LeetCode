/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function(head) {

    if (!head || !head.next || !head.next.next) return;

  // find mid
  
    var mid = null;
    var fast = head;
    var slow = head;
    while (fast.next && fast.next.next && slow.next) {
        slow = slow.next;
        fast = fast.next.next;
  }
    
  mid = slow;

  // reverse the later part
  
    var now = mid.next.next;
    var second = mid.next;
    var tmp = null;
    second.next = null;
    while (now) {
        tmp = now.next;
        now.next = second;
        second = now;
        now = tmp;
  }
    
  mid.next = second;

  // insert one after another
  
    var before = head;
    var after = mid.next;
    mid.next = null;
    while (after) {
        tmp = before.next;
        before.next = after;
        before = tmp;
        tmp = after.next;
        after.next = before;
        after = tmp
  }
    
};
