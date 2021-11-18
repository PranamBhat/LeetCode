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
 */

var BSTIterator = function(root) {
  this.stack = [];
  this.pushAll(root);
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */

BSTIterator.prototype.hasNext = function() {
  return this.stack.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */

BSTIterator.prototype.next = function() {
  var node = this.stack.pop();
  this.pushAll(node.right);
  return node.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

BSTIterator.prototype.pushAll = function (node) {
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
    
};
