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
     * @return {boolean}
     */
    isValidBST(root) {
        function validate(node,l,r){
        if(!node) return true;
        if(!(node.val > l && node.val<r)){
            return false;
        }
        return(validate(node.left,l,node.val) && validate(node.right,node.val,r))
    }

    return validate(root,-Infinity,Infinity)
    }
}
