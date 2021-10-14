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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
    const values = []

    // DFS function
    
    function dfs(root, values) {
        if(root.left) dfs(root.left, values)
        values.push(root.val)
        if(root.right) dfs(root.right, values)
    }

    // Run dfs and populate array of values
    
    dfs(root, values)

    return values[k-1];
    
};
