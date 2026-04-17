class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let arr = new Array(temperatures.length).fill(0);
        let stack = [];
        for(let i = 0; i < temperatures.length; i++){
            let t = temperatures[i]
            while(stack.length > 0 && t > stack[stack.length - 1][0]){
                const [sTemp,sInd] = stack.pop();
                arr[sInd] = i - sInd;
            }
            stack.push([t,i]);
        }
        return arr;
    }
}
