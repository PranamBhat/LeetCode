/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    
    var l1 = new ListNode(0);
    var l2 = new ListNode(0);
    var now1 = l1;
    var now2 = l2;
    var now = head;

    while (now) {
        if (now.val < x) {
            now1.next = now;
            now1 = now1.next;
        } 
        else {
            now2.next = now;
            now2 = now2.next;
        }
        now = now.next;
    }
    
    now1.next = l2.next;
    now2.next = null;
    
    return l1.next;
};
