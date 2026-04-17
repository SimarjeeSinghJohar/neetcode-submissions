class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq =  Array.from({length:nums.length + 1}, () => []);
        for(const n of nums){
            count[n] = (count[n] || 0 )+ 1;
        }
        for(const i in count){
            freq[count[i]].push(i);
        }
        let res = []
        for(let j = freq.length - 1; j > 0; j--){
            for(const c of freq[j]){
                res.push(c);
                if(res.length === k){
                    return res
                }
            }
        }
    }
}
