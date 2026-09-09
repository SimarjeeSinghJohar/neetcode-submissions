class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        if(nums.length === 0){
            return [[]];
        }
        
        let res: number[][] = [];
        let prem: number[][] = this.permute(nums.slice(1));

        for(let p of prem){
            for(let i = 0; i <= p.length; i++){
               let pCopy: number[] = p.slice();
               pCopy.splice(i, 0, nums[0]);
               res.push(pCopy);
            }
        }
        return res;

    }
}
