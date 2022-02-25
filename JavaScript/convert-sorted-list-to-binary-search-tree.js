/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function(head) {
    return helper(head, null);
};

var helper = function(head, foot) {
    var fast = head;
    var slow = head;
    var node = null;

    if (head === foot) 
        return null;

    while (fast !== foot && fast.next !== foot) {
        fast = fast.next.next;
        slow = slow.next;
    }

    node = new TreeNode(slow.val);
    node.left = helper(head, slow);
    node.right = helper(slow.next, foot);

    return node;
};
