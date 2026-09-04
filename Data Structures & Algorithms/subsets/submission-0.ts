class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let result: number[][] = [];
        let subset: number[] = [];

        function backtrack(i){

            if(i >= nums.length){
                result.push([...subset]);
                return;
            }

            // include the ith element
            subset.push(nums[i]);
            backtrack(i + 1);

            // exclude the ith element
            subset.pop();
            backtrack(i + 1);

        }

        backtrack(0);
        return result;

    }
}
