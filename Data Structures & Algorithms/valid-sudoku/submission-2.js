class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                const cell = board[i][j]
                if(cell === '.'){
                    continue;
                }
                if(
                    rows.get(i)?.has(cell) ||
                    cols.get(j)?.has(cell) ||
                    squares.get(Math.floor(i/3) * 3 + Math.floor(j/3))?.has(cell)
                ){
                    return false;
                }
                if(!cols.has(j)) cols.set(j, new Set());
                if(!rows.has(i)) rows.set(i,new Set());
                if(!squares.has(Math.floor(i/3) * 3 + Math.floor(j/3))) squares.set(Math.floor(i/3)*3+Math.floor(j/3), new Set());
                
                rows.get(i).add(cell);
                cols.get(j).add(cell);
                squares.get(Math.floor(i/3) * 3 + Math.floor(j/3)).add(cell)
            }
        }
        return true
    }
}
