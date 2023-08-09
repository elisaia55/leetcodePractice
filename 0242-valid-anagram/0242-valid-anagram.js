/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
    let anagramCheck = s.length === t.length;
    if (!anagramCheck) return false ;
    
    return anagramSort(s) === anagramSort(t)
};

const anagramSort = (string) => string
    .split('')
    .sort((a,b) => a.localeCompare(b))
    .join('')