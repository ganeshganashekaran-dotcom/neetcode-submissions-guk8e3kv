class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ans = {}
        for(const s of strs){
            const count = Array(26).fill(0);
            for(const c of s){
                count[c.charCodeAt(0)-'a'.charCodeAt(0)]++;
            }
            if(!ans[count]){
                ans[count] = [];
            }
            ans[count].push(s);
        }

        return Object.values(ans)
    }
}
