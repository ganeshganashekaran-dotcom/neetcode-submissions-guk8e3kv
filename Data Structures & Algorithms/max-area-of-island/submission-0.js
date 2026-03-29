class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let directions = [[0,1],[1,0],[0,-1],[-1,0]];
        function dfs(r,c){
            if(r<0 || c<0 || r>=rows || c>=cols || grid[r][c]===0) return 0;
            grid[r][c] = 0;
            let res = 1;
            for(let [dr,dc] of directions){
                res += dfs(r+dr,c+dc);
            }
            return res;
        }
        let area = 0;
        for(let r =0;r<rows;r++){
            for( let c=0;c<cols;c++){
                if(grid[r][c] === 1){
                    area = Math.max(area,dfs(r,c));
                }
            }
        }
        return area;
    }
}
