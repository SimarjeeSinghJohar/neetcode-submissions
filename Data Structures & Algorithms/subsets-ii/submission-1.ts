class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        let subset = [];
        let result = []
        function backtrack(i) {
            if (i >= nums.length) {
                result.push([...subset]);
                return;
            }


            subset.push(nums[i]);
            backtrack(i + 1);

            subset.pop()
            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i = i + 1;
            }
            backtrack(i + 1)



        }
        backtrack(0)
        return result;
    }
}
