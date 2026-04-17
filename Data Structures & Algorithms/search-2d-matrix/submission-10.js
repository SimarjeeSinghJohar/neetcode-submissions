class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let top = 0;
        let bottom = rows - 1;
        while(top <= bottom){
            let midR = Math.floor((top+ bottom)/2);
            if(target > matrix[midR][cols-1]){
                top = midR + 1;
            }else if(target < matrix[midR][0]){
                bottom = midR - 1;
            }else{
                break;
            }
        }

        if(!(top <= bottom)){
            return false;
        }

        let row = Math.floor((top + bottom)/2);
        let l = 0;
        let r = cols - 1;
        while(l <= r){
            let m = Math.floor((l+r)/2)
            if(target < matrix[row][m]){
                r = m - 1;
            }else if(target > matrix[row][m]){
                l = m + 1;
            }else {
                return true;
            }
        }
        return false;

    }
}
