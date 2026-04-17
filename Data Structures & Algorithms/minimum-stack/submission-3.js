class MinStack {
    constructor() {
        this.MinStack = [];
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        
        let minVal = Math.min(val,this.MinStack.length === 0 ? val : this.MinStack[this.MinStack.length - 1])
        this.MinStack.push(minVal);
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.MinStack.pop();

    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
       return this.MinStack[this.MinStack.length - 1];
    }
}
