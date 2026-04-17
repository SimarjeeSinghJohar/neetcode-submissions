class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let i = 0 , j = nums.length - 1;
        while(i < j){
            let mid = i + Math.floor((j-i)/2);
       
            if(nums[mid] < nums[j]){
                j = mid;
            }else {
                i = mid + 1;
            }
        }
        return nums[i];
    }
}
