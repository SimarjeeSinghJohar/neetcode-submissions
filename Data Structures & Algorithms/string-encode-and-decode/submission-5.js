class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoStr = '';
        for(let str of strs){
            encoStr +=  str.length + '#' + str;
        }
        return encoStr
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let res = [];
        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++
            }
            let len = parseInt(str.substring(i,j));
            i = j+1;
            j = i+len;
            res.push(str.substring(i,j));
            i = j;

        }
        return res;

    }
}
