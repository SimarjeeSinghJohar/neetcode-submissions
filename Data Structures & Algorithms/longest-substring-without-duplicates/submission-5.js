class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = new Set()
        let r = 0;
        let l = 0;
        let maxLen = 0
        while(r < s.length ){
            while(count.has(s[r])){
                count.delete(s[l]);
                l++
            }
            count.add(s[r])
            maxLen = Math.max(maxLen, r-l+1)
            r++;
        }
        return maxLen;
    }
}
