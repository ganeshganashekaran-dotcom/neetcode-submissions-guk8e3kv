class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seq= new Map();
        let max = 0;
        let l =0;
        for(let r = 0;r<s.length;r++){
            if(seq.has(s[r])){
                l = Math.max(seq.get(s[r])+1,l);
            }
            seq.set(s[r],r)
            max= Math.max(max, r-l+1)
        }
        return max

    }
}
