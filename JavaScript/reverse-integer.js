/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    
    // Conver the number to a string, split it to an array, reverse it, and then re-join it
    
    const reversedNumber = parseInt(
        Math.abs(x).toString().split('').reverse().join('')
    );

    // Check for an invalid output
    
    if (reversedNumber > 2147483647) {
        return 0;
    }

    // Return the reversed number (negating it if the original number was negative)
    
    return x < 0 ? -Math.abs(reversedNumber) : reversedNumber;

};
