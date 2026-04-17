class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length
        const stack =[];
        const res = new Array(n).fill(0);
        for(let i = 0; i < n; i++){
            let t = temperatures[i];
            while(stack.length > 0 && t > stack[stack.length - 1][0]){
                let [temp, indx] = stack.pop();
                res[indx] = i - indx; 
            }
            stack.push([t,i])
        }
        return res;
    }
}
