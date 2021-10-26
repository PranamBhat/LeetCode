/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    
    // Return early on empty input
    
    if (!strs.length) return '';

    // Loop through the letters of the first string
   
    for (let i = 0; i <= strs[0].length; i++) {
       
        // Loop through the other strings
        
        for (let j = 1; j < strs.length; j++) {
           
            // Check if this character is also present in the same position of each string
            
            if (strs[0][i] !== strs[j][i]) {
                
                // If not, return the string up to and including the previous character
                
                return strs[0].slice(0, i);
           
            }
        }
    }

    return strs[0];
    
};
