class Solution {
    public boolean makesquare(int[] matchsticks) {
        int sum = 0;
        for(int i : matchsticks){
            sum = sum + i;
        }
        if(sum%4 != 0){
            return false;
        }
        int sideLen = sum/4;
        int[] sides = new int[4];
        Arrays.sort(matchsticks);
        reverse(matchsticks);
        return dfs(sideLen, sides, 0, matchsticks);


    }
    private boolean dfs(int sideLen, int[] sides, int index, int[] matchsticks){
        if(index == matchsticks.length){
            return true;
        }
        for(int i = 0; i < sides.length; i++){
            if(sides[i] + matchsticks[index] <= sideLen){
                sides[i] += matchsticks[index];
                if(dfs(sideLen, sides, index+1, matchsticks)) return true;
                sides[i] -= matchsticks[index];
            }
            if(sides[i] == 0) break;
        }
        return false;
    }
    private void reverse(int[] matchsticks){
        for(int i = 0, j = matchsticks.length - 1; i < j; i++,j-- ){
            int temp = matchsticks[i];
            matchsticks[i] = matchsticks[j];
            matchsticks[j] = temp;
        }
    }
}