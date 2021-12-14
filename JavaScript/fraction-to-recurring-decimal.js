/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */

var fractionToDecimal = function(numerator, denominator) {
    
    if (denominator === 0) 
        return 'NaN';
    
    var sign = numerator !== 0 && ((numerator > 0) ^ (denominator > 0));
    var num = Math.abs(numerator);
    var de = Math.abs(denominator);
    var result = sign ? '-' : '';
    var map = {};
    
    result += Math.floor(num / de);
    num %= de;
    
    if (num === 0) 
        return result;
    
    result += '.';
    
    while (num > 0) {
        num *= 10;
        
        if (map[num] !== undefined) {
            result = result.substr(0, map[num]) + '(' + result.substr(map[num]) + ')';
            break;
        } 
        else {
            map[num] = result.length;
        }
        
        result += Math.floor(num / de);
        num %= de;
    }
    
    return result;
    
};
