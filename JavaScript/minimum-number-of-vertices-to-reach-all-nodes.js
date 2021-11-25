/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

var findSmallestSetOfVertices = function(n, edges) {

    const degree = Array(n).fill(0);
    const output = [];
    edges.forEach(([u, v]) => degree[v]++);
    degree.forEach((deg, i) => !deg && output.push(i));
    
    return output;
    
};
