class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = Array.from({length: nums.length + 1},() => []);
        let count = {};
        for(let i of nums){
            count[i] = (count[i] || 0) + 1;
        }
        for(let i in count){
            freq[count[i]].push(i);
        }
        const res = []
        for(let i = freq.length - 1; i > 0; i--){
            for(let j of freq[i]){
                res.push(j);
                if(res.length === k){
                    return res;
                }
            }
        }
    }
}
