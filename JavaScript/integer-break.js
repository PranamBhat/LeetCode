/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    
  if(n<=3) 
      return n-1;
  if(n%3===0) 
      return Math.pow(3, n/3);
  if(n%3===1) 
      return 4*Math.pow(3, (n-4)/3);
 	return 2*Math.pow(3,parseInt(n/3)); 

};
