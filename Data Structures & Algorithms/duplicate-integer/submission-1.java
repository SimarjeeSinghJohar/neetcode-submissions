class Solution {
    public boolean hasDuplicate(int[] nums) {

        HashSet<Integer> count = new HashSet<>();

        for(int i : nums){
            if(count.contains(i)){
                return true;
            }
            count.add(i);
        }
        return false;
        
    }
}