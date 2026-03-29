class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numset = new Set(nums);
        let longest = 0;
        for(let num of numset){
            if(!numset.has(num-1)){
                let length = 1;
                while(numset.has(num + length)){
                    length++;
                }
                longest = Math.max(longest,length)
            }
        }
        return longest
    }
}
