class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arr=[];
        for(const num of nums){
            if(arr.includes(num)) return true;

            arr.push(num);
        }
        return false;
    }
}
