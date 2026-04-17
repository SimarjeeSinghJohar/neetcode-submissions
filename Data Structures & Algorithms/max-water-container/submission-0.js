class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let op = 0;
        let i = 0;
        let j = heights.length - 1

        while(i<j){
            const area = (j-i) * Math.min(heights[i], heights[j])
            op = Math.max(op,area)
            if(heights[i] >= heights[j]){
                j--
            }else {
                i++
            }
        }       
        return op 
    }
}
