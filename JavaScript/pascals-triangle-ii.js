/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
    var p = [1]
    for(var i=0;i<rowIndex;i++){
        var temp = p.slice()
        for (var j=1;j<=i;j++)
            p[j] = temp[j-1] + temp[j]
        p.push(1)
    }
    return p
}
