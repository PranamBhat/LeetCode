/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var findTheWinner = function(n, k) {
    
    let friends = [];
    for(let i=1; i<=n; i++) 
        friends.push(i);
    let i = k-1, m=0;
    
    while(friends.length>1){
        if(i <friends.length){
            friends.splice(i,1);
            i += (k-1);
        }else{
            i =  i-friends.length;
        }
        
    }
    
    return friends.pop();
    
};
