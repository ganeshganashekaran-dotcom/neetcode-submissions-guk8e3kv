class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let stack = [];
        let res = [];

        function backTrack(openN,closeN){
            if(openN === n && closeN === n){
                console.log(stack)
                return res.push(stack.join(''));
            } 

            if(openN<n){
                stack.push("(")
                backTrack(openN + 1,closeN)
                stack.pop()
            }
            if(closeN<openN){
                stack.push(")")
                backTrack(openN ,closeN+1)
                stack.pop()
            }
        }

        backTrack(0,0);

        return res
    }
}
