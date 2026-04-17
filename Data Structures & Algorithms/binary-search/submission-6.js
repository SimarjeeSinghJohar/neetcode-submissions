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
            let mid = i + Math.floor((j-i)/2);
            if(target < nums[mid]){
                j = mid - 1;
            }else if(target > nums[mid]){
                i = mid + 1;
            }else {
                return mid;
            }
        }
        return -1;
    }
}
