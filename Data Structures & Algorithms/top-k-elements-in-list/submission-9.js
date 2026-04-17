class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = Array.from({length: nums.length + 1}, () => [] );
        let freq = {};
        let res = [];

        for(let num of nums){
            if(!freq[num]){
                freq[num] = 0;
            }
            freq[num] += 1;
        }
        for(let val in freq){
            count[freq[val]].push(val);
        }

        for(let i = count.length - 1; i > 0; i--){
            for(let c of count[i]){
                res.push(c);
                if(res.length == k){
                    return res;
                }
            }
        }


    }
}
