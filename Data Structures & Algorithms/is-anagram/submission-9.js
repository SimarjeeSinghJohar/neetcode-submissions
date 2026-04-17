class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        let count = {};
        for(let i = 0; i < s.length; i++){
            count[s[i]] = (count[s[i]] || 0) + 1;
            count[t[i]] = (count[t[i]] || 0) - 1;
        }
        for(let i in count){
            if(count[i] != 0){
                return false;
            }
        }

        return true

    }
}
