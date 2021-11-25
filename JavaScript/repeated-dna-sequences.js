/**
 * @param {string} s
 * @return {string[]}
 */

var findRepeatedDnaSequences = function(s) {
    
    let store = new Set(), result = new Set()
    
    for(let i = 0; i < s.length - 9; i++) {
        const str = s.substring(i, i + 10);
        if(store.has(str)) {
            result.add(str)
        } else {
            store.add(str)
        }
    }
    
    return Array.from(result);
    
};
