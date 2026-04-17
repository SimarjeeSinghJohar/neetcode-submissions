class Solution {
    public int lengthOfLongestSubstring(String s) {
        int j = 0;
        int res = 0; 
        HashSet<Character> seen = new HashSet<>();
        for(int i = 0; i<s.length(); i++){
            while(seen.contains(s.charAt(i))){
                seen.remove(s.charAt(j));
                j++;
            }
            seen.add(s.charAt(i));
            res = Math.max(res, i- j + 1);
        }
        return res;
    }
}
