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
     * @return {number}
     */
    maxDepth(root) {
        let res = 0;
        let stack = [[root,1]]
        while(stack.length>0){
            let [node,depth] = stack.pop();
            if(node!=null){
                res = Math.max(res,depth);
                stack.push([node.left,1+depth]);
                stack.push([node.right,1+depth])
            }
        }
        return res;
    }
}
