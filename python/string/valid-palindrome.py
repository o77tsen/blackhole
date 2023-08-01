class Solution:
    def isPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1
        
        while left < right:
            while left < right and not self.validChar(s[left]):
                left += 1
            while left < right and not self.validChar(s[right]):
                right -= 1
            while left < right and s[left].lower() != s[right].lower():
                return False
            
            left += 1
            right -= 1
        
        return True
    
    def validChar(self, char):
        return char.isalnum()