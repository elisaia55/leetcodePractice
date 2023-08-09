/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newSet = new Set(nums);
    let isValid = newSet.size === nums.length;

    return !isValid
};