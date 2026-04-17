class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const stack = [];
        let res = new Array(n).fill(0);
        for(let i = 0; i < n; i++){
            let t = temperatures[i];
            while(stack.length > 0 && t > stack[stack.length - 1][0]){
                let [temp,indx] = stack.pop();
                let days = i - indx;
                res[indx] = days;
            }
            stack.push([t,i])
        }
        return res;
    }
}
