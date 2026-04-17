class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = new Set();
        let i = 0;
        let j = i;
        let max = 0
        while(j < s.length){
            while(count.has(s[j])){
                count.delete(s[i]);
                i++;
            }
            count.add(s[j]);
            max = Math.max(max,j-i+1)
            j++;
        }
        return max;
    }
}
