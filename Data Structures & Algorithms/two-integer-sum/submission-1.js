class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let map = new Map();
       for(let i=0;i<nums.length;i++){
        let num = nums[i];
        let diff = target-num;
        if(map.has(diff)){
            return [i,map.get(diff)]
        }
        map.set(num,i);
       }
       return [-1,-1]
    }
}
