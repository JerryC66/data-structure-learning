/* 递归方法 */

#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode
{
    int data;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

typedef struct TreeNode *Tree;
typedef Tree searchTree;

searchTree insert(int data, searchTree T)
{
    if (T == NULL)
    {
        T = malloc(sizeof(TreeNode));
        T->data = data;
        T->left = NULL;
        T->right = NULL;
    }
    if (data < T->data)
    {
        T->left = insert(data, T->left);
    }
    else if (data > T->data)
    {
        T->right = insert(data, T->right);
    }
    return T;
}

// 中序遍历函数
void in_Order(Tree root)
{
    if (root)
    {
        in_Order(root->left);
        printf("%d\n", root->data);
        in_Order(root->right);
    }
}

int main()
{
    searchTree root = NULL;

    int elements[] = {5, 3, 7, 2, 4, 6, 8};
    int num_elements = sizeof(elements) / sizeof(elements[0]);

    for (int i = 0; i < num_elements; i++)
    {
        root = insert(elements[i], root);
    }

    // 输出中序遍历结果
    printf("中序遍历结果：\n");
    in_Order(root);

    return 0;
}

