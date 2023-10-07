
""" 创建树的结点类 """
class TreeNode:
    def __init__(self, data) :
        self.data = data
        self.left = None
        self.right = None

""" 插入结点 """
def insert(root, data):
    if root is None:
        return TreeNode(data)
    if data < root.data:
        root.left = insert(root.left, data)
    elif data > root.data:
        root.right = insert(root.right, data)
    return root
        

""" 中序排列 """
def in_Order(root):
    if root:
        in_Order(root.left)
        print(root.data)
        in_Order(root.right)

root = None

elements = [5, 3, 7, 2, 4, 6, 8]
for element in elements:
    root = insert(root, element)

in_Order(root)