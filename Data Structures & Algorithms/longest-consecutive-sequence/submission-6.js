class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = new Set(nums);
        let longest = 0;
        for(const n of nums){
            if(!res.has(n-1)){
                let len = 1;
                while(res.has(n + len)){
                    len++
                }
                longest = Math.max(longest, len);
            }
        }
        return longest;
    }
}
