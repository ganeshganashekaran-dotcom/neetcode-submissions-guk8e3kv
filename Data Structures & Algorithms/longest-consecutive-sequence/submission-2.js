class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let res =0;
        for(let num of nums){
            let longest = 0, curr = num
                while(numSet.has(curr)){
                    curr++;
                    longest++;
                }
                res = Math.max(longest,res);
         }
         return res
    }
 }

