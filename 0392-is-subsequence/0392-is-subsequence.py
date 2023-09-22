class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if not s:
            return True
        i = 0
        
        for j in t:
            if j == s[i]:
                i += 1
            if i == len(s):
                return i == len(s)