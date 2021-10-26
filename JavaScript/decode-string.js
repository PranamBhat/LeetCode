/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    
    let numStack = []; // Store a stack of multiples of num
    let strStack = []; //  Store the stack of str to be spliced
    let num = 0; //  Multiple "porters"
    let res = ''; //  The "porter" of the string
    
    for (const char of s) {
        
        //  Character by character scan
        
        if (!isNaN(char)) {
            
            //  Encounter numbers
            
            num = num * 10 + Number(char); //  Read number
        } else if (char === '[') {
            //  Encountered [
            strStack.push(res); //  The result string enters the strStack stack and waits
            res = ''; //  Cleared after finishing stacking
            numStack.push(num); //  The multiple num enters the stack and waits
            num = 0; //  Cleared after finishing stacking
        } else if (char === ']') {
            
            //  Encountered ], the top of the two stacks is popped
            
            let repeatTimes = numStack.pop(); //  Get the number of copies
            res = strStack.pop() + res.repeat(repeatTimes); //  Construct substring
        } else {
            
            //  When a letter is encountered, append it to the result string
            
            res += char;
        }
    }
    return res;
};
