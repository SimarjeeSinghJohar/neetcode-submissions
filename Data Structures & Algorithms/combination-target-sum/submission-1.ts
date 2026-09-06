class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        let result : number[][] = [];

        function backtrack(i: number, cur: number[], sum: number){
            if(sum === target ){
                result.push([...cur]);
                return;
            }else if(sum > target || i >= nums.length){
                return;
            }else{
                cur.push(nums[i]);
                backtrack(i, cur, sum + nums[i]);
                cur.pop();
                backtrack(i+1, cur, sum)
            }
        }

        backtrack(0, [] , 0)

        return result;

    }
}
