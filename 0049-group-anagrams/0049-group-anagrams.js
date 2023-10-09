/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    // sort each string, use that as key value pairs in a map, when sorted, if string matches a key we add it to the object 
    
    const anagramMap = new Map();

    for (const str of strs) {
        sortedStr = str.split('').sort().join('');
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, [])
        }
        anagramMap.get(sortedStr).push(str)
    }
        return [...anagramMap.values()]


    // const map = {}
    
    // for (let str of strs) {
    //     const newSort = str
    //     .split('')
    //     .sort((a,b) => a.localeCompare(b))
    //     .join(''); 
        
    // if (!map[newSort]) {
    //     map[newSort] = [str];
    // } else {
    //     map[newSort].push(str)
    // }
    // } 
    // return Object.values(map)
    
    
    
   
    
};