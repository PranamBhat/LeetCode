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
 * @return {number[][]}
 */

var levelOrder = function(root) {
    if(!root) return []
    const queue = []
    const output = []
    queue.push(root)
    while(queue.length) {
        // Remove all the current nodes in the queue and add each node's children to the queue
        const len = queue.length
        const row = []
        for(let i = 0; i < len; i++) {
            const cur = queue.shift()
            if(cur.left) queue.push(cur.left)
            if(cur.right) queue.push(cur.right)
            // Push the current node val to the row array
            row.push(cur.val)
        }
        // Push the current row array into the output array
        output.push(row)
    }
    return output
};
