var MedianFinder = function () {
  this.arr = []
}

/**
 * @param {number} num
 * @return {void}
 */

MedianFinder.prototype.addNum = function (num) {
  let [left, right] = [0, this.arr.length - 1]
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (num >= this.arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
    
  this.arr.splice(left, 0, num)

}

/**
 * @return {number}
 */

MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.arr.length / 2)
  return this.arr.length % 2 === 0
    ? (this.arr[mid - 1] + this.arr[mid]) / 2
    : this.arr[mid]

};
