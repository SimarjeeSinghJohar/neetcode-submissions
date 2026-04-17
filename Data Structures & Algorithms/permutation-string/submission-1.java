class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int[] arr1 = new int[26];
        int[] arr2 = new int[26];

        if(s1.length() > s2.length()){
            return false;
        }
         
        int l = 0;
        int matches = 0;

        for(int i = 0; i < s1 .length(); i++){
         
            arr1[s1.charAt(i) - 'a']++;
            arr2[s2.charAt(i) - 'a']++;
        
        }
        
        for(int i = 0; i < 26; i++){
            if(arr1[i] == arr2[i]){
                matches++;
            }
        }

        for(int i = s1.length(); i < s2.length(); i++){
            if(matches == 26){
                return true;
            }
            int index = s2.charAt(i) - 'a';
            arr2[index]++;
            if(arr1[index] == arr2[index]){
                matches++;
            }else if(arr1[index] + 1 == arr2[index] ){
                matches --;
            }
            
            index = s2.charAt(l) - 'a';
            arr2[index]--;
            if(arr1[index] == arr2[index]){
                matches++;
            }else if(arr1[index] - 1 == arr2[index] ){
                matches --;
            }
            l++;
        }
        return matches == 26;
    }
}
