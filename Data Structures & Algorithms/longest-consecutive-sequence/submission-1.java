class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        int longest = 0;
        for(int i : nums){
            seen.add(i);
        }
        for( int i : seen){
            if(!seen.contains(i-1)){
            int length = 1 ;
            while(seen.contains(i+length)){
                length++;
            }
            longest = Math.max(longest,length);

            }
        }
        
        return longest;

    }
}
