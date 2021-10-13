/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    if(intervals.length <= 1) return intervals;
    
    // sort the array so earlier start times are at the beginning
    
    intervals = intervals.sort((a,b) => a[0] - b[0])
    let output = [intervals[0]];
    let current = output[0];
    
    // If the current interval's end time is greater than or equal 
    // to the next interval's start time, then we know there is an
    // overlap and we merge them.
    // If there is no overlap, then we add the next interval to the 
    // list of intervals in our output array and repeat the process
    // until we go through the entire list of intervals.
    
    for(let i = 1; i< intervals.length;i++) {
        const next = intervals[i]
        if(current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            current = next;
            output.push(current);
        }
    }
    return output;
};
