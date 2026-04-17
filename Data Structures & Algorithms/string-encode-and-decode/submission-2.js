class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    encode(strs) {
        let encoStr = ""
        for(let s of strs){
            encoStr +=  s.length + "#" + s;
        }
        return encoStr;
    }

    decode(s){
        let response = [];
        let i = 0;
        while( i < s.length){
            let j = i

            while(s[j]!== '#'){
                j++;
            }

            let len = parseInt(s.substring(i,j));
            i = j+1
            j = i + len

            response.push(s.substring(i,j))
            i = j
        }
        return response;
    }
}
   