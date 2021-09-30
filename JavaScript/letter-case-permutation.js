/**
 * @param {string} s
 * @return {string[]}
 */

var letterCasePermutation = function(S) {
    
    S = S.toLowerCase()
    let len = S.length, ans = []
    const dfs = (i, res='') => {
        if (i < len) {
            dfs(i+1, res + S[i])
            if (S[i] >= 'a') dfs(i+1, res + S[i].toUpperCase())
        } else ans.push(res)
    }
    
    dfs(0)
    
    return ans
    
};
