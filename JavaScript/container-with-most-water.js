/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {

    /* The first thing we should realize is that the amount of water contained is always going to be a rectangle whose area is defined as length * width. The width of any container will be the difference between the index of the two lines (i and j), and the height will be whichever of the two sides is the lowest (min(height[i], height[j])) */
       
    let ans = 0, i = 0, j = height.length-1
    while (i < j) {
        ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i))
        height[i] <= height[j] ? i++ : j--
    }
    return ans

};
