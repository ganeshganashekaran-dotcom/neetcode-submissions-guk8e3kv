class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = matrix.length;
        let r = matrix[0].length;
        let top =0,bot = l-1;
        while(top<=bot){
            const row = Math.floor((top+bot)/2);
            if(target>matrix[row][r-1]){
                top = row+1;
            }else if(target < matrix[row][0]){
                bot = row -1;
            }else{
                break;
            }
        }
        if(!(top<=bot)){
            return false;
        }

        const row = Math.floor((top+bot)/2);
        let left = 0;
        let right = r-1;
        while(left<=right){
            const m = Math.floor((left+right)/2);
            if(target > matrix[row][m]){
                left = m+1;
            } else if(target < matrix[row][m]){
                right = m-1;
            } else{
                return true;
            }
        }

        return false
        
    }
}
