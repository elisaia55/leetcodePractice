class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        new_set = set(nums)
        longest_seq = 0
        
        for n in nums:
            if (n - 1) not in new_set:
                length = 1 
                while (n + length) in new_set:
                    length += 1
                longest_seq = max(length, longest_seq)
        return longest_seq