class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        // console.log(numSet);
        let longest = 0;
        let count =0;
        for(let num of numSet){
            count++;
            if(!numSet.has(num - 1)){
                let length = 1;
                while(numSet.has(num + length)){
                    length++;
                    // count++;
                }
                longest = Math.max(longest , length);
            }
        }
        return longest
    }
}
