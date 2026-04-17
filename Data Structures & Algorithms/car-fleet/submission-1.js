class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = [];
        let pairs = position.map((p,i) => [p,speed[i]]);
        pairs.sort((a,b) => b[0] - a[0]);
        for(let [i,j] of pairs){
            stack.push((target - i)/j);
            if(stack.length >=2 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }
        }
        return stack.length

    }
}
