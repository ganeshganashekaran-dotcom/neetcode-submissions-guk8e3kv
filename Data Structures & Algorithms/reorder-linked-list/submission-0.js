/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        head = this.rec(head,head.next)
        
    }

    rec(root,cur){
        if(cur === null){
            return root
        }
        root = this.rec(root,cur.next);
        if(root === null){
            return null
        }

        let temp = null;
        if(root === cur || root.next === cur){
            cur.next = null
        }else{
            temp = root.next;
            root.next = cur;
            cur.next = temp
        }

        return temp
    }
}
