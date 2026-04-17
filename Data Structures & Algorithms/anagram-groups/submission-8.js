class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for(let str of strs){
        let freq = new Array(26).fill(0);

            for(let s of str){

                freq[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = freq.join(',');
            if(!res[key]){
                res[key] = []
            }
            res[key].push(str);

        }

        return Object.values(res)

    }
}
