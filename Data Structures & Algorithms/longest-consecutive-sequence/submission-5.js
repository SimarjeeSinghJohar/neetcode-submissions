class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;
        for(nums of set){
            if(!set.has(nums - 1)){
             let len = 1;
                while(set.has(nums + len)){
                    len++;
                }
                longest = Math.max(longest,len);
            }
        }
        return longest;
    }
}
