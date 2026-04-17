class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {};
        let res = 0;
        let i = 0;
        let j = 0;
        let maxf = 0
        while(j < s.length){
            count[s[j]] = (count[s[j]] || 0) + 1;
            maxf = Math.max(maxf, count[s[j]])

            let size = (j-i+1) - maxf;
            if(size > k){
                count[s[i]] = count[s[i]] - 1;
                i++;
            }
            res = Math.max(res, j-i+1);
            j++
        }
        return res
    }
}
