class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let l = 0;
      let r = s.length-1;
      while(l < r){
        while(l < r && !this.isAlphanumeric(s[l])){
            l++
        }

        while(r > l && !this.isAlphanumeric(s[r])){
            r--
        }

        if(s[l].toLowerCase() !== s[r].toLowerCase()){
            return false
        }
        l++;
        r--
      }
      return true
    }

    isAlphanumeric(str){
        return (('a' <= str && str <= 'z' ) ||
            ('A' <= str && str <= 'Z')||
            ('0' <= str && str <= '9')
        )

        
    }
}
