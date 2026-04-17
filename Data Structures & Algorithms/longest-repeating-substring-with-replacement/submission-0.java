class Solution {
    public int characterReplacement(String s, int k) {
        HashMap<Character,Integer> count = new HashMap<>();
        int res = 0;
        int l = 0;
        int maxF = 0;
        for(int i = 0; i< s.length(); i++){
            count.put(s.charAt(i), count.getOrDefault(s.charAt(i),0) + 1);
            maxF = Math.max(maxF, count.get(s.charAt(i)));
        

            while((i - l + 1) - maxF > k ){
                count.put(s.charAt(l), count.get(s.charAt(l)) - 1);
                l++;
            }
            res = Math.max(res, i-l + 1);

        }

        return res;

    }
}
