class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let len = temperatures.length;
        let count  = new Array(len).fill(0);
        let stack  = [];
        for(let i = 0;  i < len; i++ ){
            let t = temperatures[i];

            while(stack.length > 0 && t > stack[stack.length - 1][0]){
            const [temp, stackIdx] = stack.pop();
            count[stackIdx] = i - stackIdx;
            }
            stack.push([t,i]);
        }
        return count;

    }
}
