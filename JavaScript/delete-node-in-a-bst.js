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
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function(root, key) {
 
    if (root === null) 
        return root;
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } 
    else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } 
    else { 
        
        // found the key
        // has children
        if (root.left !== null && root.right !== null) {
            let min = new TreeNode();
            min = root.right;
            while (min.left !== null) min = min.left;
            root.val = min.val;
            root.right = deleteNode(root.right, min.val);
        } else { 
            // no children
            let newRoot = new TreeNode();
            newRoot = root.left === null ? root.right : root.left;
            root.left = root.right = null;
            return newRoot;
        }
    }
    
    return root;
    
};
