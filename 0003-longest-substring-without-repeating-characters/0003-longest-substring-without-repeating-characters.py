class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        #Time : O(n)
        #Space: O(n)

        char_set = set()
        left = 0
        result = 0

        for right in range(len(s)):
            while s[right] in char_set:
                char_set.remove(s[left])
                left += 1
            char_set.add(s[right])
            result = max(result, right - left + 1)
        return result










        # window = ''
        # result = 0
        # for c in s:
        #     window = window[window.find(c)+1:] + c
        #     result = max(result, len(window))
        # return result