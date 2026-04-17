class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;
        let top = 0;
        let bot = ROWS - 1;
        while(top <= bot){
            let midRow = top + Math.floor((bot-top)/2);

            if(target > matrix[midRow][COLS - 1]){
                top = midRow + 1;
            }else if(target < matrix[midRow][0]){
                bot = midRow - 1
            }else{
                break;
            }
            if(!(top <= bot)){
                return false;
            }
        }
        let midRow = top + Math.floor((bot-top)/2);
        let l = 0;
        let r = COLS-1;
        while(l<=r){
            let m = Math.floor((l+r)/2);
            if(target > matrix[midRow][m]){
                l = m + 1;
            }else if(target < matrix[midRow][m]){
                r = m - 1;
            }else {
                return true;
            }
        } 
        return false

    }
}
