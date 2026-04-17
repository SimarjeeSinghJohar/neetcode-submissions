class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Map();
        const col = new Map();
        const sqr = new Map();

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] === '.') {
                    continue
                };

                let squares = `${Math.floor(i/3)},${Math.floor(j/3)}`;

                if(row.get(i) && row.get(i).has(board[i][j]) ||
                col.get(j) && col.get(j).has(board[i][j])||
                sqr.get(squares) && sqr.get(squares).has(board[i][j])){
                    return false;
                }
                if(!row.has(i)) row.set(i, new Set());
                if(!col.has(j)) col.set(j, new Set());
                if(!sqr.has(squares)) sqr.set(squares, new Set());

                row.get(i).add(board[i][j]);
                col.get(j).add(board[i][j]);
                sqr.get(squares).add(board[i][j]);

            }
        }
        return true;
    }
}
