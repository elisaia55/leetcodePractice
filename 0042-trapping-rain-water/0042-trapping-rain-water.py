class Solution:
    def trap(self, height: List[int]) -> int:
        c = height.index(max(height))
        
        water_volume = 0 
        
        for new_array in [height[:c], height[:c:-1]]:
            first = 0
            for i in new_array:
                if i < first:
                    water_volume += first - i
                else:
                    first = i
        return water_volume
        