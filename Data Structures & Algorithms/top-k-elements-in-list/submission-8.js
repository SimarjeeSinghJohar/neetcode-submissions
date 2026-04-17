class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = Array.from({length: nums.length + 1},() => []);
        let count = {};
        let res = [];
        for(const i  of nums){
            count[i] = (count[i] || 0) + 1;
        }
        for(const i in count){
            freq[count[i]].push(i);
        }
        for(let i = freq.length - 1; i > 0; i--){
            for(let j of freq[i]){
                res.push(j)
                if(res.length === k){
                    return res;
                }
            }
        }
    }
}
