class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
    
        for(const c of tokens){
            if( c === "+"){
                const sum = stack[stack.length - 2] + stack[stack.length - 1];
                stack.pop();
                stack.pop();
                stack.push(sum);
            }else if(c === "-"){
                const sub = stack[stack.length - 2] - stack[stack.length - 1];
                stack.pop();
                stack.pop();
                stack.push(sub);
            }else if(c === "*"){
                const mul = stack[stack.length - 2] * stack[stack.length - 1];
                stack.pop();
                stack.pop();
                stack.push(mul);
            }else if(c === "/"){
                const div = stack[stack.length - 2] / stack[stack.length - 1];
                stack.pop();
                stack.pop();
                stack.push(Math.trunc(div));
            }else{
                stack.push(parseInt(c));
            }

        }
        return stack.pop();

    }


}
