/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function backspaceCompare(S, T) {
    const s = evaluate(S)
    const t = evaluate(T)
    return s === t
};

function evaluate(str) {
    const output = []
    for (const char of str) {
        if (char !== '#') {
            output.push(char)
        } else {
            output.pop()
        }
    }
    return output.join('')
}
