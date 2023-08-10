/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    // sort each string, use that as key value pairs in a map, when sorted, if string matches a key we add it to the object 
    
    const map = {}
    
    for (let str of strs) {
        const newSort = str
        .split('')
        .sort((a,b) => a.localeCompare(b))
        .join(''); 
        
    if (!map[newSort]) {
        map[newSort] = [str];
    } else {
        map[newSort].push(str)
    }
    } 
    return Object.values(map)
    
    
    
   
    
};