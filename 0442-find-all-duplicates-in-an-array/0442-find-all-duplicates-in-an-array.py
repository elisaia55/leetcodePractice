class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        res = []
        n = len(nums)
        for i in range(n):
            num = abs(nums[i])
            indx = num - 1
            if nums[indx] < 0:
                res.append(num)
            nums[indx] *= -1
        return res