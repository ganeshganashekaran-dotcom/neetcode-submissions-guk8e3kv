class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let row = board.length;
        let col = board[0].length;
        const path = new Set();

        const direction = [[1,0],[-1,0],[0,-1],[0,1]]

        const dfs=(r,c,i)=>{
            if(i === word.length) return true;
            if( r<0 || c<0 || r>=row || c>= col || board[r][c] !== word[i] || path.has(`${r},${c}`)){
                return false
            };
            path.add(`${r},${c}`);
            for(const[dr,dc] of direction){
                if(dfs(dr+r,dc+c,i+1)){
                    return true;
                }
            }

            path.delete(`${r},${c}`);
            return false;
            
        }
        for(let r=0;r<row;r++){
                for (let c =0;c<col;c++){
                    if(dfs(r,c,0)){
                        return true
                    }
                }
            }
            return false
    }
}
