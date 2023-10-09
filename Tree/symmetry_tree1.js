// 递归法

function TreeNode(val, left, right) {
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right == undefined ? null : right);
}


let checkNode = function(p,q) {
    if(!p && !q){
        return true;
    }
    if(!p || !q){
        return false;
    }
    return (p.val == q.val && checkNode(p.left,q.right) && checkNode(p.right,q.left)); 
    }

let isSymmetric = function (root) {
    return checkNode(root.left, root.right);
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
        val: 2,
        left: null,
        right: {
            val: 4,
            left: null,
            right: null
        }
    }
};

let result = isSymmetric(tree);
console.log(result);