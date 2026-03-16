class MinStack {
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(val) {
		this.stack.push(val);

		if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
			this.minStack.push(val);
		}
	}

	pop() {
		if (!this.stack.length) return;

		const removed = this.stack.pop();
		if (removed === this.minStack[this.minStack.length - 1]) {
			this.minStack.pop();
		}
	}

	top() {
		return this.stack[this.stack.length - 1];
	}

	getMin() {
		return this.minStack[this.minStack.length - 1];
	}
}
