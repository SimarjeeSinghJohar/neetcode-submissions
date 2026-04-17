class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> seen = new HashSet<>();

        for(int i: nums){
            seen.add(i);
        }
        int longest = 0;
        for(int j : seen){
            if(!seen.contains(j-1)){
                int length = 1;
                while(seen.contains(j + length)){
                    length++;
                }
                longest = Math.max(longest, length);

            }
        }
        return longest;
    }
}
