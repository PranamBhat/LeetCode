/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')
    
    for (i=0; i < s.length; i++) {
        let current = map[arr[i]]
        if (current!=null && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }
        
        map[arr[i]] = i
    }
    
    return maxLen
};
