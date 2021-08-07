// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
    }

    push(val) {
        this.top++;
        this.data[this.top] = val;
    }

    pop() {
        if (this.top === -1) {
            return undefined;
        }

        let val = this.data[this.top];
        this.data[this.top] = undefined;
        this.top--;

        return val;
    }

    peek() {
        if (this.top === -1) {
            return undefined;
        }

        return this.data[this.top];
    }
}

module.exports = Stack;
