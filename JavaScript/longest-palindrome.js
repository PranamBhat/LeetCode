/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {

let longest = 0;
let keys = {};

    for (const char of s) {
        
        // Keep track of character count in the keys object
        
        keys[char] = (keys[char] || 0) + 1;
        
        // If add 2 to the longest variable everytime we hit an even number count
        
        if (keys[char] % 2 == 0) 
            longest += 2;
    }
    
    // If s.length is greater than longest then we know that we can add a unique char in the middle of the palindrome
    
    return s.length > longest ? longest + 1 : longest;
    
};
