/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(!preorder.length || !inorder.length) return null;

        let rootVal = preorder[0];
        let root = new TreeNode(rootVal);
        let index = inorder.indexOf(rootVal);

        let leftInorder = inorder.slice(0, index);
        let rightInorder = inorder.slice(index+1);

        let leftPreorder = preorder.slice(1, index + 1);
        let rightPreorder = preorder.slice(index+1);

        root.left = this.buildTree(leftPreorder, leftInorder);
        root.right = this.buildTree(rightPreorder, rightInorder);

        return root;
    }
}
