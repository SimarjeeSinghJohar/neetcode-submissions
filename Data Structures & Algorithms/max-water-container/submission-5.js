class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let i = 0;
        let j = heights.length - 1;
        
        while(i < j){
            let area = (j - i) * Math.min(heights[i],heights[j]);
            maxArea = Math.max(area,maxArea);
            if(heights[i] > heights[j]){
                j--;
            }else{
                i++;
            }
        }
        return maxArea;
    }
}
