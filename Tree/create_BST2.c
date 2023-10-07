/* 非递归方法  */

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
// 指向结构体的指针

void insert(int x, searchTree T)
{
    searchTree* P;
    // 指向结构体的指针的指针
    while (T != NULL)
    {
        if (x < T -> data)
        {
            P = &(T->left);
            T = T->left;
        }
        else if (x > T->data)
        {
            P = &(T->right);
            T = T->right;
        }
        else
            return;
    }
    *P = (searchTree) malloc (sizeof (TreeNode));
	(*P) -> data = x;
	(*P) -> left = NULL;
	(*P) -> right = NULL;
}

// 必须使用指针的指针。如果只使用局部指针变量 P，它无法影响树的结构，因为它只是一个复制了指针值的局部变量。使用指针的指针或指针引用允许更改父节点的指针，以便正确地将新节点插入到树中。