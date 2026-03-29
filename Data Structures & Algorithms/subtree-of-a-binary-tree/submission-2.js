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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function dfs(node, subroot) {
        if (!node && !subroot) return true;
        if (!node || !subroot || node.val !== subroot.val) return false;
        return dfs(node.left, subroot.left) && dfs(node.right, subroot.right);
    }

    if (!root) return false;

    
    return dfs(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
