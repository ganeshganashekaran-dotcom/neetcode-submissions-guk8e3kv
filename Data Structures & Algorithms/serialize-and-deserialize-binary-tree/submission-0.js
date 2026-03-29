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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
       let res = [];
       this.dfsSerialize(root,res);
       return res.join(",") 
    }
    dfsSerialize(root,res){
        if(!root){
            res.push("N");
            return ;
        }
        res.push(root.val.toString())
        this.dfsSerialize(root.left,res);
        this.dfsSerialize(root.right,res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let vals = data.split(',');
        let i = {val:0};
        return this.dfsDeserialize(vals,i);
    }

    dfsDeserialize(vals,i){
        if(vals[i.val] === 'N'){
            i.val++;
            return null;
        }
        let node = new TreeNode(parseInt(vals[i.val]));
        i.val++;
        node.left = this.dfsDeserialize(vals,i);
        node.right = this.dfsDeserialize(vals,i);
        return node;
    }
}
