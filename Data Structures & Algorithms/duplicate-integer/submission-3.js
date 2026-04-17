class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = new Set(nums);
       return (count.size < nums.length);
    }
}
