/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function(n) {

    let ans = 0

    const place = (i, vert, ldiag, rdiag) => {
        if (i === n) 
            ans++
        else 
            for (let j = 0; j < n; j++) {
            let vmask = 1 << j, lmask = 1 << (i+j), rmask = 1 << (n-i-1+j);
            if (vert & vmask || ldiag & lmask || rdiag & rmask) 
                continue;
            place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask);
        }
    }

    place(0,0,0,0);
    
    return ans;
    
};
