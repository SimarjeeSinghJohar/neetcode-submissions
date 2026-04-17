class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i = 0; i < tokens.length; i++){
            if(tokens[i] === "+"){
                let sum = stack.pop() + stack.pop();
                stack.push(sum);
            }else
            if(tokens[i] === "-"){
                let a = stack.pop();
                let b = stack.pop()
                let diff = b - a;
                stack.push(diff);
            }else
            if(tokens[i] === "*"){
                let mul = stack.pop() * stack.pop();
                stack.push(mul);
            }else
            if(tokens[i] === "/"){
                let a = stack.pop();
                let b = stack.pop()
                let div = Math.trunc(b / a);
                stack.push(div);
            }else{
                stack.push(parseInt(tokens[i]));
            }
            
        }
        return stack.pop();
    }
}
