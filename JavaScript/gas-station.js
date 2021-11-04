/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var canCompleteCircuit = function(gas, cost) {

var len = gas.length;
var tank = 0;
var total = 0;
var start = 0;

    for (var i = 0; i < len; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      total += tank;
      tank = 0;
    }
  }
    
  return tank + total >= 0 ? start : -1;
    
};
