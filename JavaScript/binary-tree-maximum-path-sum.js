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

var maxPathSum = function(root) {
    
  var max = Number.MIN_SAFE_INTEGER;
    
  var maxSum = function (node) {
      
    if (!node) 
        return 0;
      
    var left = Math.max(maxSum(node.left), 0);
    var right = Math.max(maxSum(node.right), 0);
      
    max = Math.max(left + right + node.val, max);
      
    return Math.max(left, right) + node.val;
      
  };
    
  maxSum(root);
    
  return max;
    
};
