/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    var res = [];
    var len = p.length;
    for(var i = 0; i < s.length; i++){
        var t = s.slice(i, i+len).split('').sort().join('');        
        if(t === p){
            res.push(i);
        }
    }
    
    return res;
    
};

// Sliding window

var findAnagrams = function(s, p) {
    var res = [],
        left = 0,
        right = 0,
        count = p.length,
        map = {};
    
    s = s.split('');
    
    for(let i = 0; i < p.length; i++){
        map[p.charAt(i)]? map[p.charAt(i)]++ : map[p.charAt(i)] = 1
    }
    
    while( right < s.length ){
        if (map[s[right++]]-- >= 1) count--;
        if (count == 0) res.push(left);
        if (right - left == p.length && map[s[left++]]++ >=0)count++;
    }
    
    console.log(res)
    return res
    
};
