/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function(n) {
    var squart_root = 1;
    var dp = [];
    for(var i = 1;i<n+1;i++){
        if(i == squart_root*squart_root){
            dp[i] = 1;
            squart_root ++ ;
        }else{
            var min = i;
            for(var j = squart_root-1;j>0;j--){
                min = Math.min(min,1+dp[i-j*j]);
            }
            dp[i] = min;
        }
    }
    return dp[n];
};
