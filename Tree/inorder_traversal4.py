class TreeNode:
    def __init__(self, val) :
        self.val = val
        self.left = None
        self.right = None

class Solution:
    def inorderTraversal(self, root: TreeNode):
        WHITE, GRAY = 0, 1
        res = []
        stack = [(WHITE, root)]
        while stack:
            color, node = stack.pop()
            if node is None: continue
            if color == WHITE:
                stack.append((WHITE, node.right))
                stack.append((GRAY, node))
                stack.append((WHITE, node.left))
            else:
                res.append(node.val)
        return res

# 创建一棵树
root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

solution = Solution()
result = solution.inorderTraversal(root)
print(result)