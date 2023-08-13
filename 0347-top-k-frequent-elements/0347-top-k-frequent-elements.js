/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let newMap = {};
    let newBucket = [];
    let newResults = [];
    
    for (let i = 0; i<nums.length; i++) {
        if (!newMap[nums[i]]) {
            newMap[nums[i]] = 1;
            
        } else {
            newMap[nums[i]]++
        }
    }
    
    for (let [key, value] of Object.entries(newMap)) {
        if (!newBucket[value]) {
            newBucket[value] = new Set().add(key);
            
        } else {
            newBucket[value] = newBucket[value].add(key)
        }
    }
    
    for (let i = newBucket.length - 1; i >= 0; i--) {
        if(newBucket[i]) newResults.push(...newBucket[i]);
        if(newResults.length === k) break;
    } return newResults
}; 