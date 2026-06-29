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
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let kthNode;
        let counter = 0;

        function dfs(node) {
            if (!node) return;

            dfs(node.left)
            counter++;
            if (counter === k) {
                kthNode = node.val;
                return
            } 
            dfs(node.right);
        }

        dfs(root);
        return kthNode;
    }
}
