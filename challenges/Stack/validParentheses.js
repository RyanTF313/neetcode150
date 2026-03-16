const isValidParentheses = (s) => {
	const pairs = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	const stack = [];

	for (const char of s) {
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char);
			continue;
		}

		if (!stack.length || stack.pop() !== pairs[char]) {
			return false;
		}
	}

	return stack.length === 0;
};
