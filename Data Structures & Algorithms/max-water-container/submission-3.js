class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length -1;
        let maxA = 0
        while(i<j){
            let area = Math.min(heights[i], heights[j]) * (j - i)
            maxA  = Math.max(maxA, area);
            if(heights[i] < heights[j] ){
                i++
            }else{
                j--;
            }
        }
        return maxA
    }
}
