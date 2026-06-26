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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        let res = [];
        let queue = [root];

        while (queue.length) {
            let size = queue.length;
            let values = [];
            for( let i = 0; i < size; i++) {
                let node = queue.shift();
                values.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            res.push(values)
        }
        return res;
    }
}
