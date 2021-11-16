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

var zigzagLevelOrder = function(root) {
    
  const result = []
  if (!root) {
    return result
  }
  let frontier = [root]
  result[0] = [root.val]
  let level = 0
  while (frontier.length) {
    const next = []
    level += 1
    frontier.forEach((node) => {
      if (node.left) {
        next.push(node.left)
      }
      if (node.right) {
        next.push(node.right)
      }
    })
    if (next.length !== 0) {
      result[level] = next.map(node => node.val)
    }
    frontier = next
  }
  return result.map((levels, index) => {
    if (index % 2 === 1) {
      return levels.reverse()
    }
      
    return levels;
      
  })
   
};
