class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let store = new Map();
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(store.has(diff)){
                return [i, store.get(diff)]
            }
            store.set(nums[i], i);
        }
        return []
    }
}
