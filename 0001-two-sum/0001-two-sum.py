class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pre_map = {}
        
        for i, n in enumerate(nums):
            difference = target - n
            if difference in pre_map:
                return [pre_map[difference], i]
            pre_map[n] = i
        return