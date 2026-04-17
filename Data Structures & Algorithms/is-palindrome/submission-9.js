class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1
        while(l < r){
            while(l < r && !this.isAplhaNum(s[l])){
                l++;
            }
            while(r > l && !this.isAplhaNum(s[r])){
                r--;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    isAplhaNum(s){
        return (
            ('a' <= s && s <= 'z') ||
            ('A' <= s && s <='Z') ||
            ('0' <= s &&  s<= '9')
        )
    }
}
