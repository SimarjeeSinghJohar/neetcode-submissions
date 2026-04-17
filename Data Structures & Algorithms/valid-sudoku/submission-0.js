class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = new Map();
        let col = new Map();
        let sqr = new Map();
        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board.length; c++){
                if(board[r][c] === '.') continue;

                const squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`
                if((row.get(r) && row.get(r).has(board[r][c])) ||
                 (col.get(c) && col.get(c).has(board[r][c]))||
                 (sqr.get(squareKey) && sqr.get(squareKey).has(board[r][c]))){
                    return false;
                }

                if(!row.has(r)) row.set(r, new Set());
                if(!col.has(c)) col.set(c, new Set());
                if(!sqr.has(squareKey)) sqr.set(squareKey, new Set());

                row.get(r).add(board[r][c]);
                col.get(c).add(board[r][c]);
                sqr.get(squareKey).add(board[r][c]);

            }
        }
        return true;

    }
}
