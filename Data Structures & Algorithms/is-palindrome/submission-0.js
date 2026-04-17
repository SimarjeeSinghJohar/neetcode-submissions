class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let len = 0;
        let j = s.length - 1;
       while( len < j ) {
            while(len < j && !this.alphNumeric(s[len])){
                len++;
            }
            while(j > len && !this.alphNumeric(s[j])){
                j--;
            }
            if(s[len].toLowerCase() !== s[j].toLowerCase()){
                return false;
            }
            len++;
            j--;
        }
        return true;

    }

    alphNumeric(char) {
        return (
            (char >= 'A' && char <= 'Z') ||
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9') 
        ); 
    }
}
