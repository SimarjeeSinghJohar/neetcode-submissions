class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let arr1 = new Array(26).fill(0);
        let arr2 = new Array(26).fill(0);
        let matches = 0;
        for(let i = 0 ; i < s1.length; i++){
            arr1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            arr2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for(let i = 0; i < 26; i++){
            if(arr1[i] === arr2[i]){
                matches++;
            }
        }
        let i = 0;
        for(let j = s1.length; j < s2.length; j++){
            if(matches === 26){
                return true;
            }
            let index = s2[j].charCodeAt(0) - 'a'.charCodeAt(0);
            arr2[index]++;
            if(arr1[index] === arr2[index]){
                matches++
            }else if(arr1[index] + 1 === arr2[index]){
                matches--;
            }

            index = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
            arr2[index]--;
            if(arr1[index] === arr2[index]){
                matches++
            }else if(arr1[index] - 1 === arr2[index]){
                matches--;
            }
            i++

        }
        return matches === 26;

    }
}
