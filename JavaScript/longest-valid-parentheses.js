/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function(s) {
    
    let stack = [-1], ans = 0
    
    for (let i = 0; i < s.length; i++)
        
        if (s[i] === '(') 
            stack.push(i)
    
        else if (stack.length === 1) 
            stack[0] = i
    
        else stack.pop(), ans = Math.max(ans, i - stack[stack.length-1])
    
    return ans
    
};
