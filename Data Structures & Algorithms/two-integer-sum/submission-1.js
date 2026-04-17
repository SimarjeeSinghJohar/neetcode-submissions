class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map();

        for(let i =0; i<nums.length; i++) {
            let bumber = target - nums[i]
            if(map.has(bumber)){
                return [map.get(bumber), i];
            }
            map.set(nums[i], i)
        }

        return [];

    }
}
