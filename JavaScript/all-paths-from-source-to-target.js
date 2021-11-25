/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function(graph) {
    
    const results = [];
    findPaths([0], 0, graph, results);
    return results;
    
};

function findPaths(current, node, graph, results) {
    
    if (node == graph.length - 1) {
        results.push(current.slice(0));
        return;
    }
    
    for(let i = 0; i < graph[node].length; i++) {
        current.push(graph[node][i]);
        findPaths(current, graph[node][i], graph, results);
        current.pop();
    }
    
};
