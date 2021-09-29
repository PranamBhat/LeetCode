/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

const countSubstrings = function(s, t) {
    let result = 0;
    let dpl = new Array(101);
    let dpr = new Array(101);
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (!dpl[i]) {
                dpl[i] = new Array(101).fill(0);
            }
            if (s[i] == t[j]) {
                dpl[i][j] = 1 + ((dpl[i - 1] || [])[j - 1] || 0);
            }
        }
    }
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = t.length - 1; j >= 0; j--) {
            if (!dpr[i]) {
                dpr[i] = new Array(101).fill(0);
            }
            if (s[i] == t[j]) {
                dpr[i][j] = 1 + ((dpr[i + 1] || [])[j + 1] || 0);
            }
        }
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] != t[j]) {
                result += (((dpl[i - 1] || [])[j - 1] || 0) + 1) * (((dpr[i + 1] || [])[j + 1] || 0) + 1);
            }
        }
    }
    return result;
};
