class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const res = new Map();
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(res.has(diff)){
                return [i, res.get(diff)];
            }
            res.set(nums[i], i);
        }
        return [];
    }
}
