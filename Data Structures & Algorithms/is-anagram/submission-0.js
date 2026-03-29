class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const ans={};
        const strs=[s,t]
        for(s of strs){
            const count = Array(26).fill(0)
        for(const c of s){
            count[c.charCodeAt(0)-'a'.charCodeAt(0)]++
        }

        if(!ans[count]){
            ans[count] = []
        }
        ans[count].push(s);
        
        // if(count[0] === count[1]){
        //     return true;
        // }else{
        //     return false;
        // }
        }
                    console.log(Object.values(ans)[0].length)
            if( Object.values(ans)[0].length > 1){
                return true;
            }else{
                return false;
            }
        
    }
}
