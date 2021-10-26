/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    const numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const strLen = s.length;
    let total = 0;

    // Loop through the letters
    
    for (let i = 0; i < strLen; i++) {
        
        // Check if the current letter is followed by one with a higher value (indicating a deduction)
        
        if (i < strLen - 1 && numerals[s[i + 1]] > numerals[s[i]]) {
            
            // Remove the current letter's numeric value from the total
            
            total -= numerals[s[i]];
        } else {
            
            // Add the current letter's numeric value to the total
            
            total += numerals[s[i]];
        }
    }

    return total;
    
};
