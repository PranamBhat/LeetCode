/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for(var i = parseInt(s.length/2); i>=1; i--){
        if(s.length%i===0){
            var j=i;
            var sub=s.substring(0,j);
            while(s.indexOf(sub,j)==j)j+=i;
            if(j==s.length)return true;
        }
    }
    return false;
};
