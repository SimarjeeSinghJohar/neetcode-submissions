class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
         let res = [];
         let curr = [];
         this.backtrack(nums, target, res, curr, 0);
         return res;

    }
    
    backtrack(nums, target, res, curr, index){
        if(target === 0){
            res.push([...curr])
        }else if(target < 0 || index >= nums.length){
            return
        }else{
            curr.push(nums[index])
            this.backtrack(nums, target - nums[index], res, curr, index);
            curr.pop();
            this.backtrack(nums, target, res, curr, index+1)
        }
    }
}
