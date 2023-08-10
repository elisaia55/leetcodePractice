/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newSet = new Set(nums);
    let isInvalid = newSet.size !== nums.length; 

    return isInvalid 

};
