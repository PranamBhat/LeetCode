/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {

    var sum = 0;
    nums.forEach(function(num){
        sum += num;
    });
    if(target>sum || target<-sum) 
        return 0;
    var dp = [];
    dp[0+sum] = 1;
    var maxIndex = sum*2+1;
       
    nums.forEach(function(num){
        var tmp = [];
        for(var k=0;k<maxIndex;k++){
            if(dp[k] !== undefined && dp[k] !== 0){
                if(tmp[k+num] === undefined){
                    tmp[k+num] = dp[k];
                }else{
                    tmp[k+num] += dp[k];
                }

                if(tmp[k-num] === undefined){
                    tmp[k-num] = dp[k];
                }else{
                    tmp[k-num] += dp[k];
                }
            }
        }
        dp = tmp;
    });
       
    return dp[target+sum]===undefined?0:dp[target+sum];
       
};
