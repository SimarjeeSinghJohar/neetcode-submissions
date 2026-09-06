class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        let res: number[][] = [];
        candidates.sort((a,b) => a-b)

        function backtrack(i: number, curr: number[], sum: number){
            if(sum === target){
                res.push([...curr]);
                return;
            }

            if(sum > target || i === candidates.length){
                return;
            }

            for (let j = i; j < candidates.length; j++){
                if(j > i && candidates[j] === candidates[j-1]){
                    continue;
                }

                curr.push(candidates[j]);
                backtrack(j + 1, curr, sum + candidates[j]);
                curr.pop();
               
            }
        }
        backtrack(0,[],0);
      
        return res;
    }
}
