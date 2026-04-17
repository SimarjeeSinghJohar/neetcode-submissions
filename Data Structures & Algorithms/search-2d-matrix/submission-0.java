class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
      int ROW = matrix.length;
      int COL = matrix[0].length;
      int l = 0, r = ROW * COL - 1;

      while(l <= r){
        int m = l+ (r-l)/2;
        int rows = m/COL, col = m%COL;
        if(matrix[rows][col] > target){
            r = m - 1;
        }else if(matrix[rows][col] < target){
            l = m + 1;
        } else{
            return true;
        }
      }
      return false;
    }
}
