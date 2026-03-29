class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map();
    let result = [];
    let bucket = [];
    for(let num of nums){
        freq.set(num,(freq.get(num) || 0)+1);
    }

    for(let[num,fre] of freq){
        bucket[fre] = (bucket[fre] || new Set()).add(num);
    }

    for(let i = bucket.length-1;i>=0;i--){
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length >= k) break;
    }

    return result
    }
}
