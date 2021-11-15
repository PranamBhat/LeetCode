/**
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function(s) {
   
    s= s.split("")
    let len = s.length, stack = []
    for (let i = 0, c = s[0]; i < len; c = s[++i])
        if (c === ")")
            if (stack.length) 
                stack.pop()
            else 
                delete s[i]
        else if (c === "(") 
            stack.push(i)
    for (let i = 0; i < stack.length; i++)
        delete s[stack[i]]
    
    return s.join("") 

};
