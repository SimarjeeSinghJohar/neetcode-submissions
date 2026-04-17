class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = new Set();
        let l = 0;
        let r = 0;
        let res = 0

        while(r < s.length){
            while(count.has(s[r])){
                count.delete(s[l]);
                l++;
            }
            count.add(s[r]);
            res = Math.max(res,r- l +1)
            r++;
        }
        return res;
    }
}
