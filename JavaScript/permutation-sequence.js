/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {

    var str = '';
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]; // n!
    var tmp1 = 0;
    var tmp2 = 0;

    k--;

    for (var j = n; j >= 1; j--) {
        tmp1 = factorial[j - 1];
        tmp2 = Math.floor(k / tmp1);

        k %= tmp1;
        str += nums[tmp2];

        nums.splice(tmp2, 1);
    }

    return str;

};
