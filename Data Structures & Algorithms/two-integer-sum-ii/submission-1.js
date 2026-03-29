class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length-1;
        while(l<r){
            if(target - numbers[l] > numbers[r]){
                l++;
            }
            else if(target - numbers[r] < numbers[l]){
                r--;
            }else{
                return[l+1,r+1]
            }

        }
        return [];
    }
}
