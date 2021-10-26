/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {

	const freqs = nums.reduce((obj, value) => {
		obj[value] = obj[value] + 1 || 1;
		return obj;
	}, {});

	return Object.keys(freqs)
		.sort((a, b) => freqs[b] - freqs[a])
		.slice(0, k)
		.map(key => Number(key));
};
