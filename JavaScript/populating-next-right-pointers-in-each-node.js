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
    
    if(!root) {
        return root;
    }
    
    
    preorder(root);
    
    return root;
    
};

var preorder = function(root) {
    
    if(!root) {
        return;
    }
    
    if(root.left != null) {
        
    
        
        root.left.next = root.right;
    }
    
    if(root.right!=null) {
        root.right.next = root.next ? root.next.left : null ;
    }
    
    preorder(root.left);
    
    preorder(root.right);
    
}
