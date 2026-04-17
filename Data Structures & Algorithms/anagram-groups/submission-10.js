class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let count = {};
        for(let str of strs){
        let freq = new Array(26).fill(0);
            for(let s of str){
                freq[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = freq.join(',');
            if(!count[key]){
                count[key] = [];
            }
            count[key].push(str);

        }
        return Object.values(count);
    }
}
