class Solution:
    def maxArea(self, height: List[int]) -> int:
        res = 0
        l, r = 0, len(height) - 1
        
        while l < r:
            w = r - l
            h = min(height[l], height[r])
            area = w * h
            res = max(res, area)
            
            if height[l] < height[r]:
                l += 1
            else: 
                r -= 1
        return res
        
        
        
        
        
        
        
        
        
        
        
        
        
     
        