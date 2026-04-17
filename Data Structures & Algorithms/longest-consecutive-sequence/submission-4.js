class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let elements = new Set(nums);
        let longest = 0;
        for(nums of elements){
            if(!elements.has(nums-1)){
                let len = 1;
                while(elements.has(nums+len)){
                    len++
                }
                longest = Math.max(longest,len)

            }
        
        }
        return longest
    }
}
