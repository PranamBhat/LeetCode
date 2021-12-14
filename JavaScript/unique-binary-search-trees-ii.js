/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

var generateTrees = function(n) {
    
    if (n < 1) 
        return [];
    
    return generate(1, n);
};

var generate = function (l, r) {
  var nodes = [];
  var node = null;
  var left = [];
  var right = [];
  for (var i = l; i <= r; i++) {
    left = generate(l, i - 1);
    right = generate(i + 1, r);
    for (var j = 0; j < left.length; j++) {
      for (var k = 0; k < right.length; k++) {
        node = new TreeNode(i);
        node.left = left[j];
        node.right = right[k];
        nodes.push(node);
      }
    }
  }
    
  return nodes.length ? nodes : [null];
    
};
