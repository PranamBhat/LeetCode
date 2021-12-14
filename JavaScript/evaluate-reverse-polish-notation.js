/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {

    var stack = [];
    var len = tokens.length;
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var token = '';

    for (var i = 0; i < len; i++) {
        token = tokens[i];

        switch (token) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                n1 = stack.pop();
                n2 = stack.pop();
                stack.push(n2 - n1);
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case '/':
                n1 = stack.pop();
                n2 = stack.pop();
                n3 = n2 / n1;
                stack.push(n3 > 0 ? Math.floor(n3) : Math.ceil(n3));
                break;
            default:
                stack.push(Number(token));
        }
    }

    return stack.pop();

};
