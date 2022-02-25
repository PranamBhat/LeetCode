/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let rev = s.split('').reverse().join('')
    //console.log(rev)
    let n = s.length
    for(let i = 0 ; i < n; i++){
        if(s.substr(0,n-i) == rev.substr(i)){
            return rev.substr(0,i) + s
        }
    }
    return ''
};
