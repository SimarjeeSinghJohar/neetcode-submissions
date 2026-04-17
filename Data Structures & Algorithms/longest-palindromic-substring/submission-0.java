class Solution {
    public String longestPalindrome(String s) {

        int resIdx = 0;

        int reslen = 0;
        for(int i = 0; i < s.length(); i++){
            //odd
            int l = i, r = i;
            while(l >=0 && r < s.length() && s.charAt(l) == s.charAt(r)){
                if(r-l+1 > reslen){
                    resIdx = l;
                    reslen = r-l+1;
                }
                r++;
                l--;
            }

            l = i;
            r = i+1;
            while(l >=0 && r < s.length() && s.charAt(l) == s.charAt(r)){
                if(r-l+1 > reslen){
                    resIdx = l;
                    reslen = r-l+1;
                }
                r++;
                l--;
            }

        }
        return s.substring(resIdx, resIdx + reslen);
    }
}
