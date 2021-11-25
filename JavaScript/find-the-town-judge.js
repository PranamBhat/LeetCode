/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

var findJudge = function(n, trust) {
  
    let counts = new Array(n+1).fill(0);
    
    for(let [i,j] of trust){
        counts[i]--
        counts[j]++
    }
    for(let i = 1; i < counts.length; i++){
        if(counts[i] == n-1){
            return i;
        }
    }
    
    return -1
    
};
