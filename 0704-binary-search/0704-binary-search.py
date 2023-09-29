class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l,r = 0, len(nums) - 1
        
        while l <= r:
            mid_pointer = l + ((r - l) // 2)
            if nums[mid_pointer] > target:
                r = mid_pointer - 1
            elif nums[mid_pointer] < target:
                l = mid_pointer + 1
            else:
                return mid_pointer
        return -1