/**
 * initialize your data structure here.
 */

var MinStack = function() {
  this.min = [];
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */

MinStack.prototype.push = function(x) {
  if (this.min.length === 0 || x <= this.min[this.min.length - 1]) this.min.push(x);
  this.stack.push(x);
};

/**
 * @return {void}
 */

MinStack.prototype.pop = function() {
  var val = this.stack.pop();
  if (val === this.min[this.min.length - 1]) this.min.pop();
};

/**
 * @return {number}
 */

MinStack.prototype.top = function() {
  return this.stack.length ? this.stack[this.stack.length - 1] : 0;
};

/**
 * @return {number}
 */

MinStack.prototype.getMin = function() {
  return this.min.length ? this.min[this.min.length - 1] : 0;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
