// 递归法

function TreeNode(val, left, right) {
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right == undefined ? null : right);
}


var isSameTree = function (p, q) {
    if(p==null && q==null){
        return true;
    }
    if(p!=null && q!=null && p.val == q.val){
        return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
    }
    return false;
    
};

// 建两棵树
let tree1 = new TreeNode;
tree1 = {
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

let tree2 = new TreeNode;
tree2 = {
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
        val: 4,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
};

let result = isSameTree(tree1, tree2);
console.log(result);