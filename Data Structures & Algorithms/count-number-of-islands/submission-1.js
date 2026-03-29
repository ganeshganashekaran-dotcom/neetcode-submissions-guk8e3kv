class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let directions = [[1,0],[0,1],[-1,0],[0,-1]];
        let islands = 0;

        const bfs = (r,c) =>{
            const q = new Queue;
            q.push([r,c]);
            grid[r][c] = '0';
            while(!q.isEmpty()){
                const [row,col] = q.pop();
                for(const [dr,dc] of directions){
                    const nr = dr + row, nc = dc + col;
                    if(nr>=0 && nc>=0 && nr< rows && nc< cols && grid[nr][nc] === '1'){
                        q.push([nr,nc]);
                        grid[nr][nc] = '0'
                    }
                }
            }
        }

        for(let r=0;r<rows;r++){
            for(let c =0;c<cols;c++){
                if(grid[r][c] === '1'){
                    bfs(r,c);
                    islands++
                }
            }
        }

        return islands;
    }
}
