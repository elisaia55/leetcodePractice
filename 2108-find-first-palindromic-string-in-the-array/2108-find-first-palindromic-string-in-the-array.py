class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for s in words:
            if s == ''.join(reversed(list(s))):
                return s
        return ''
