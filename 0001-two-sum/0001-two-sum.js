/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let createdMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        let newDiff = target - nums[i]

        if (createdMap.has(newDiff)) {
            return [i, createdMap.get(newDiff)]
        }
        createdMap.set(nums[i], i)
    }
};