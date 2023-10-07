
""" 检查一串括号字符是否有效 """
from numpy import stack


class Solution:
    def isValid(self, s):
        """ 
         :type s: str
         :rtype: bool
         """
        dic = {'{': '}', '[': ']', '(': ')', '?': '?'}
        stack = ['?']
        for c in s:
            if c in dic:
                stack.append(c)
            elif dic[stack.pop()] != c:
                return False
            
        return len(stack) == 1
    


solver = Solution()
input_string = input("请输入一个包含括号的字符串: ")
result = solver.isValid(input_string)

if result:
    print("字符串有效")
else:
    print("字符串无效")