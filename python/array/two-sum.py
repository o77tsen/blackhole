class Solution:
    def twoSum(self, nums, target):
        num_map = {}
        
        for i, num in enumerate(nums):
            target_dif = target - num
            
            if target_dif in num_map:
                return [num_map[target_dif], i]
            
            num_map[num] = i
        
        return []