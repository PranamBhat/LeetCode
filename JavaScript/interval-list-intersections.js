/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

var intervalIntersection = function(firstList, secondList) {
    
    let i = 0;
    let j = 0;
    let res = [];
    
    while (i < firstList.length && j < secondList.length) {
         let maxStart = Math.max(firstList[i][0], secondList[j][0]);
         let minEnd = Math.min(firstList[i][1], secondList[j][1]);
         
        if (maxStart <= minEnd) {
             res.push([maxStart, minEnd]);
         }
         
        if (firstList[i][1] < secondList[j][1]) {
             i++;
         } 
        else {
             j++;
         }
     }
    
     return res;
    
};
