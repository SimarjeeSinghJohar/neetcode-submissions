class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let freq = {};
        for(let str of strs){
        let count = new Array(26).fill(0);
            for(let s of str){
                count[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = count.join(',');
            if(!freq[key]){
                freq[key] = []
            }
            freq[key].push(str);
        }
        return Object.values(freq)
    }
}
