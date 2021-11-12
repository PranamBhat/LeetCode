/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {

    nums.sort(function(a,b){
        return a-b;
    });
    
    var used={}, n=nums.length, res=[];
    var recur = function(cur){
        if (cur.length==n){
            res.push(cur.slice());        
    }
    
    for(var i=0; i<n; i++){
        if(used[i] || (i>0 && nums[i-1]==nums[i] && !used[i-1])){
            continue;
        }
    cur.push(nums[i]);
    used[i]=true;
    recur(cur);
    used[i]=false;
    cur.pop();
}
}
recur([]);
return res;
    
};
