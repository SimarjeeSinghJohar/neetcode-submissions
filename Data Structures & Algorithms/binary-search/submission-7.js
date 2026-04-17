class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i = 0;
        let j = nums.length - 1;
        while(i <= j){
            let m = i + Math.floor((j-i)/2);
            if(target < nums[m]){
                j = m - 1;
            }else if(target > nums[m]){
                i = m + 1;
            }else if(target === nums[m]){
                return m
            }
        }
        return -1;
    }
}
