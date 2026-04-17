class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Map();
        let cols = new Map();
        let sqrs =  new Map();
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] === '.') continue;
                let squareKey = `${Math.floor(i/3)}, ${Math.floor(j/3)}`;

                if(rows.get(i) && rows.get(i).has(board[i][j]) ||
                cols.get(j) && cols.get(j).has(board[i][j]) ||
                sqrs.get(squareKey) && sqrs.get(squareKey).has(board[i][j])){
                    return false;
                }
                
                if(!rows.get(i)) rows.set(i, new Set());
                if(!cols.get(j)) cols.set(j, new Set());
                if(!sqrs.get(squareKey)) sqrs.set(squareKey, new Set());
                
                rows.get(i).add(board[i][j]);
                cols.get(j).add(board[i][j]);
                sqrs.get(squareKey).add(board[i][j]);

            }
        }
        return true;
    }
}
