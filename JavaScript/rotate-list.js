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

var rotateRight = function(head, k) {
    
    var count = 1;
    var last = head;
    var now = head;

    if (!head || !head.next) return head;

    while (last.next) {
        last = last.next;
        count++;
    }

    k %= count;

    if (k === 0) return head;

    while (k < count - 1) {
        now = now.next;
        k++;
    }

    last.next = head;
    head = now.next;
    now.next = null;

    return head;
    
};
