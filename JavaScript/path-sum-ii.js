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
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function(root, targetSum) {

    var res = [];
    
    helper(root, targetSum, [], res);
    
    return res;
    
};

var helper = function (root, targetSum, now, res) {
  
    if (!root) 
      return;

  now.push(root.val);

  if (root.val === targetSum && !root.left && !root.right) 
      res.push(now);

  helper(root.left, targetSum - root.val, Array.from(now), res);
  helper(root.right, targetSum - root.val, Array.from(now), res);
    
};
