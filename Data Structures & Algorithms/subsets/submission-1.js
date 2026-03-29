class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const subset = [];
        this.rec(nums,0,subset,res);
        return res
    }

    rec(nums,i,subset,res){
        if(i>= nums.length){
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.rec(nums,i+1,subset,res);
        subset.pop();
        this.rec(nums,i+1,subset,res);
    }
}
