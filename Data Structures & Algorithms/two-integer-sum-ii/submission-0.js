class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length-1;
        let currentSum = 0;
        while(l<r){
            currentSum = numbers[l] + numbers[r];
            if(target<currentSum){
                r--
            }
            if(target>currentSum){
                l++
            }
            if(target === currentSum){
                return[l+1, r+1]
            }
        }
    }
}
