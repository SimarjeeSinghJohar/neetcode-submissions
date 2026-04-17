class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0])

        let op = [];
        op.push(intervals[0]);

        for(let interval of intervals){
            let start = interval[0];
            let end = interval[1];
            let lastEnd = op[op.length-1][1];
            if(start <= lastEnd){
                op[op.length-1][1] = Math.max(end,lastEnd)
            }else{
                op.push([start,end])
            }
        }
        return op;
    }
}
