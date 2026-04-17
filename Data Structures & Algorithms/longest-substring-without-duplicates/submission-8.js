class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = new Set();
        let i = 0;
        let j = 0;
        let max = 0
        while(j < s.length){
            while(count.has(s[j])){
                count.delete(s[i]);
                i++;
            }
            count.add(s[j]);
            j++;
            max = Math.max(max, count.size);
        }
        return max;
    }
}
