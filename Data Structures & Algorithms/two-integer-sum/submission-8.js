class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let count = {};
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(diff in count){
                return [count[diff] , i];
            }
            count[nums[i]] = i;
        }
        return [];
    }
}
