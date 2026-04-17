class Solution {
    public boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;
        while(i < j){
            while(i < j && !isAlphaNum(s.charAt(i))){
                i++;
            }

            while(j > i && !isAlphaNum(s.charAt(j))){
                j--;
            }

            if(Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j))){
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
    
    public boolean isAlphaNum(char i){
        return (
            i >= 'A' && i <= 'Z' ||
            i >= 'a' && i <= 'z' ||
            i >= '0' && i <= '9'
        );
    }
}
