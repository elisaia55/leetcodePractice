/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    if (!haystack.includes(needle)) return -1;
    const foundInHaystack = haystack.split(`${needle}`)[0].length
    return foundInHaystack
};