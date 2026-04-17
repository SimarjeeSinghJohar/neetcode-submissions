class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(const c of tokens){
            if( c === '+'){
                let sum =stack.pop() + stack.pop();
                stack.push(sum);
            }else if(c === "-"){
                let a = stack.pop()
                let b = stack.pop()
                const sub  = b-a
                stack.push(sub);
            }else if(c === "*"){
                let mul = stack.pop() * stack.pop();
                stack.push(mul);;
            }else if(c === "/"){
                const a = stack.pop();
                const b = stack.pop();
                const div = Math.trunc(b/a);
                stack.push(div);
            }else {
                stack.push(parseInt(c));
            }
        }
        return stack.pop();
    }
}
