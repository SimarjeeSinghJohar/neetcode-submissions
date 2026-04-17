class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq =  Array.from({length: nums.length + 1},() => []);
        let map = new Map();
        for(const i of nums){
            map.set(i , (map.get(i) || 0) + 1)
        }
        for(const [i,j] of map.entries()){
            freq[j].push((i))
        }
        const res = [];
        for (let i = freq.length - 1; i > 0; i--){
            for(const j of freq[i]){
                res.push(j);
                if(res.length === k){
                    return res;
                }
            }
        }
        
    }
}