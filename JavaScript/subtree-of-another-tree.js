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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var isSubtree = function(root, subRoot) {
    
    let ts = undefined;
    ts = dfs(subRoot);
    let found = false
    
    function dfs(d){
    if(!d) 
        return '#'
    const l = `${d.val} + ${dfs(d.left)} + ${dfs(d.right)}`
    if(ts && l === ts) 
        found = true
    return l
  } 
    
  dfs(root);
    
  return found;
    
};
