// 递归法

function TreeNode(val, left, right) {
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right == undefined ? null : right);
}


var inorderTraversal = function (root) {
    const res = [];
    const inorder = (root) => {
        if(!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

// 建一棵树
let tree = new TreeNode;
tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
};

let result = inorderTraversal(tree);
console.log(result);