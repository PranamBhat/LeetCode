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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var recoverTree = function(root) {

    // javascript can't pass value by reference 
    // so pass array object by reference
    let first = [null];
    let second = [null];
    let prev = [null];
    inorder(root, first, second, prev);
    [first[0].val, second[0].val] = [second[0].val, first[0].val];
};

function inorder(root, first, second, prev) {
    
    // Because inorder traverse BST, all values are sorted.
    // Using inorder traversal to find two nodes that have prev.val > root.val
    if (root === null) 
        return;
    inorder(root.left, first, second, prev);
    if (prev[0] && prev[0].val > root.val) {
        if (first[0] === null) 
            first[0] = prev[0];
        second[0] = root;
    }
    prev[0] = root;
    
    inorder(root.right, first, second, prev);
    
};
