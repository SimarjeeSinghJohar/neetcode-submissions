class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROW = matrix.length;
        let COL = matrix[0].length;
        let i = 0, j = ROW * COL - 1;
        while(i <= j){
            let mid = i + Math.floor((j-i)/2);
            let rows = Math.floor(mid/COL), col =mid%COL;
            if(target > matrix[rows][col]){
                i = mid + 1
            }else if( target < matrix[rows][col] ){
                j = mid - 1;
            }else{
                return true;
            }

        }
        return false;
    }
}
