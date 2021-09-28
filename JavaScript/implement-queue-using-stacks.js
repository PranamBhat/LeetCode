var MyQueue = function() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.pushStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.popStack.empty()) {
        while (!this.pushStack.empty()) {
            this.popStack.push(this.pushStack.pop());
        }
    }
    
    return this.popStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.popStack.empty()) {
        while (!this.pushStack.empty()) {
            this.popStack.push(this.pushStack.pop());
        }
    }
    
    return this.popStack.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.popStack.empty() && this.pushStack.empty();
};



class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }

  pop() {
    let top = this.storage[this.size - 1];
    this.size--;
    delete this.storage[this.size];
    return top;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  empty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}
