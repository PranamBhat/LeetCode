/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

    if (!intervals) return [];
    const ans = new Array();

    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    if (intervals.length === 1) return intervals;
    const prev = [intervals[0][0], intervals[0][1]];
    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i];
        if (isOverlap(prev, curr)) {
            prev[0] = Math.min(prev[0], curr[0]);
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            ans.push([...prev]);
            prev[0] = curr[0];
            prev[1] = curr[1];
        }

        if (i === intervals.length - 1) ans.push([...prev])
    }

    return ans;
};

const isOverlap = (prev, curr) => {
    return prev[1] >= curr[0] && prev[1] <= curr[1] ||
        prev[0] >= curr[0] && prev[0] <= curr[1] ||
        prev[0] <= curr[0] && prev[1] >= curr[1];
};
