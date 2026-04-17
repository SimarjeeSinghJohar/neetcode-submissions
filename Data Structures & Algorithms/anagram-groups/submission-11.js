class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let str of strs){
            let arr = new Array(26).fill(0);
            for(let s of str){
                arr[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = arr.join(',');
            if(!(key in map)){
                map[key] = []
            }
            map[key].push(str);
        }
        return Object.values(map);
    }
}
