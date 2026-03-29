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
    goodNodes(root) {
        let count = 0;
        function dfs(node,maxVal){
            if(!node){
                return 0
            }
            if(node.val >= maxVal){
                count =1
            }else{
                count =0 
            }
            maxVal = Math.max(maxVal,node.val)
            count +=dfs(node.left,maxVal);
            count +=dfs(node.right,maxVal)
            return count
        }
        return dfs(root,root.val)
    }
}
