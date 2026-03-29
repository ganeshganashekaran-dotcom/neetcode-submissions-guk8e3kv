class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.includes(target)){
            return nums.indexOf(target)
        }else{
            return -1
        }
    }
}
