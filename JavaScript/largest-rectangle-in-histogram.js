/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function(heights) {
  var len = heights.length;
  var stack = [];
  var max = 0;
  var h = 0;
  var w = 0;
  
  for (var i = 0; i <= len; i++) {
    while (stack.length && (i === len || heights[i] <= heights[stack[stack.length - 1]])) {
      h = heights[stack.pop()];
      w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      max = Math.max(max, h * w);
    }
    stack.push(i);
  }
  
  return max;
    
};
