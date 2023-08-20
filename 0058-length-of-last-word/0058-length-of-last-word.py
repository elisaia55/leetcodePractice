class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        new_words = s.split()
        if new_words:
            return len(new_words[-1])
        return 0