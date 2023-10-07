// 颜色标记法

function TreeNode(val, left, right) {
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right == undefined ? null : right);
}


var inorderTraversal = function (root) {
    const res = [];
    const stk = [[0, root]];
    const WHITE = 0;
    const GRAY = 1;
    while (stk.length) {
        const [color, node] = stk.pop();
        if (!node) {
            continue;
        }
        if (!color) {
            stk.push([WHITE, node.right]);
            stk.push([GRAY, node]);
            stk.push([WHITE, node.left]);

        }
        else {
            res.push([color, node]);
        }
    }
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