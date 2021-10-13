/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    
    // define output array
    
    const output = []
    
    // define map
    
    const map = {}
    
    // loop through strs
    
    for(let i = 0; i < strs.length; i++) {
        
       // sort current str
        
        const strSorted = strs[i].split('').sort().join('')
        
        // if sorted string is present in map
        
        if(map[strSorted]!==undefined) {
            
           // get index of output array to push current str
            
            output[map[strSorted]].push(strs[i])
        } else {
            
             // push current str into output array
            
            output.push([strs[i]])
            
            // add sorted str to map
            // set map[sorted str] = output array length - 1 
            
            map[strSorted] = output.length-1
        }

    }

    // return output array
    
    return output 
};
