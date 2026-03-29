class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let atl = new Set();
        let pac = new Set();
        let directions = [[1,0],[-1,0],[0,-1],[0,1]];
        let rows = heights.length;
        let cols = heights[0].length;
        function dfs(r,c,visited,prevHeight){
            if(r<0 || c < 0 || r>=rows||c>= cols || visited.has(`${r},${c}`) || heights[r][c]<prevHeight) return;
            visited.add(`${r},${c}`);
            for(let [dr,dc] of directions){
                dfs(r +dr,c+dc,visited,heights[r][c]);

            }
        }
        for(let r=0;r<rows;r++){
            dfs(r,0,pac,heights[r][0]);
            dfs(r,cols-1,atl,heights[r][cols-1]);
        }
        for(let c=0;c<cols;c++){
            dfs(0,c,pac,heights[0][c]);
            dfs(rows-1,c,atl,heights[rows-1][c]);
        }
        let result = [];
         for(let r=0;r<rows;r++){
             for(let c=0;c<cols;c++){
                if(atl.has(`${r},${c}`) && pac.has(`${r},${c}`)){
                    result.push([r,c])
                }
             }
         }

         return result
    }
}
