class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> count = new HashMap<>();

        for(String str : strs){
            int[] arr = new int[26];
            for(char s : str.toCharArray()){
                arr[s - 'a']++;
            }

            String key = Arrays.toString(arr);

                count.putIfAbsent(key, new ArrayList<>());
                count.get(key).add(str);
        }
        
        return new ArrayList<>(count.values());
    }
}
