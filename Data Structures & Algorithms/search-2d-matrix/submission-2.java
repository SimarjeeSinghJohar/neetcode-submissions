class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int ROWS = matrix.length;
        int COLS = matrix[0].length;
        int length = ROWS * COLS - 1;
        int l = 0 , r = length;
        while(l <= r){
            int mid = l + (r-l)/2;
            int row = mid/COLS, col = mid%COLS;

            if(matrix[row][col] > target){
                r--;
            }else if(matrix[row][col] < target){
                l++;
            }else{
                return true;
            }
        }
        return false;
    }
}
