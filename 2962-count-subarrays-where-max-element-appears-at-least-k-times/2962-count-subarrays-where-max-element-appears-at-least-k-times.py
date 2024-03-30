class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        n = len(nums)
        freq = defaultdict(int)
        max_i = max(nums)
        i = j = 0
        ans = 0
        while j < n:
            freq[nums[j]] += 1
            while freq.get(max_i,0) >= k:
                ans += n - j
                freq[nums[i]] -= 1
                i += 1
            j += 1
        return ans
        