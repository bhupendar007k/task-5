class Stack {
    constructor() {
        this.items = [];
    }


    add(element) {
        return this.items.push(element);
    }


    remove() {
        if (this.items.length > 0) {
            for (let i = this.items.length; i > 0; i--) {
                return this.items.pop();
            }
        }
    }

    clear() {
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);
stack.remove()
console.log(stack.items);
stack.clear();
console.log(stack.items);