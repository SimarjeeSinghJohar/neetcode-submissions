class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
            let rows = new Map();
            let cols =new Map();
            let sqrs = new Map();
            for(let i = 0; i<9; i++){
                for(let j = 0; j<9; j++){
                    if(board[i][j] === '.'){
                        continue;
                    }
                    let squares = `${Math.floor(i/3)}, ${Math.floor(j/3)}`;
                    if(rows.get(i) && rows.get(i).has(board[i][j]) ||
                       cols.get(j) && cols.get(j).has(board[i][j]) ||
                       sqrs.get(squares) && sqrs.get(squares).has(board[i][j]) 
                    
                    ){
                        return false;
                    }

                    if(!rows.has(i)) rows.set(i, new Set());
                    if(!cols.has(j)) cols.set(j, new Set());
                    if(!sqrs.has(squares)) sqrs.set(squares, new Set())

                    rows.get(i).add(board[i][j]);
                    cols.get(j).add(board[i][j]);
                    sqrs.get(squares).add(board[i][j]);

                }
            }
            return true;
    }
}
