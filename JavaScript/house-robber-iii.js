/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var rob = function(root) {
    
    // Choose between using values at root + grandchildren (current) or using values from children (next)
    
    const { current, next } = traverse(root);

    return Math.max(current, next);
    
};

function traverse(root) {
    
    // If there is not root ther is no root value or grandchildren values (current) and there are also no children values (next)
    
    if (!root) {
        return { current: 0, next: 0 };
    }

    // Get values for children
    
    const left = traverse(root.left);
    const right = traverse(root.right);

    // Value if we include the root node in our robbing path
    
    const current = root.val + left.next + right.next;

    // Max Value if we include the children in our robbing path
    
    const next = Math.max(left.current, left.next) + Math.max(right.current, right.next);

    return { current, next };

}
