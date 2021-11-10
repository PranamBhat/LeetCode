/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function(root) {
  
if (root == null) {
    return null;
  }
  
  root.next = null;
  bfs([root]);
  return root;
};

var bfs = function(nodes) {
    
  let que = [...nodes];
  let nextNodes = [];
  let prevNode = null;
  
  while(que.length > 0) {
    
      // console.log(que.length, que);
    
    let curr = que.shift();
    
    if (curr.right != null) {
      curr.right.next = prevNode;
      prevNode = curr.right;
      nextNodes.push(curr.right);
    }
    
    if (curr.left != null) {
      curr.left.next = prevNode;
      prevNode = curr.left;
      nextNodes.push(curr.left);
    }
  }
  
  if(nextNodes.length > 0) {
    bfs(nextNodes);
  }
    
};
