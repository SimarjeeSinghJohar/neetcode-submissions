class Solution {
    public int longestConsecutive(int[] nums) {
       Set<Integer> numSet = new HashSet<>();
       int longest  = 0;
        for(int i : nums){

            numSet.add(i);
        }

        for(int j : numSet ){
            if(!numSet.contains(j-1)){
                int length = 1;
                while(numSet.contains(j + length)){
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
