class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let element = new Set(nums);
        let longest = 0;
        for (nums of element){
            if(!element.has(nums-1)){
                let len = 1;
                while(element.has(nums+len)){
                    len++;
                }
            longest = Math.max(longest,len)
            }
        }
        return longest;
    }
}
