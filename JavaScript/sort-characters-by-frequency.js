/**
 * @param {string} s
 * @return {string}
 */

var frequencySort = function(s) {

    const mapChars = s.split('').reduce((acc, ch) => {
        acc[ch] = (acc[ch] || 0) + 1;
        return acc;
    }, {})
    
    const sortedChars = Object.entries(mapChars).sort((a, b) => b[1] - a[1]);
   
    return sortedChars.reduce((acc, [ch, count]) => {
       acc += ch.repeat(count);
       return acc;
   }, '')
    
};
