const searchMatrix = (matrix, target) => {
	let top = 0;
	let bottom = matrix.length - 1;

	while (top <= bottom) {
		const row = Math.floor((top + bottom) / 2);

		if (target < matrix[row][0]) {
			bottom = row - 1;
		} else if (target > matrix[row][matrix[row].length - 1]) {
			top = row + 1;
		} else {
			let left = 0;
			let right = matrix[row].length - 1;

			while (left <= right) {
				const mid = Math.floor((left + right) / 2);

				if (matrix[row][mid] === target) {
					return true;
				}

				if (matrix[row][mid] < target) {
					left = mid + 1;
				} else {
					right = mid - 1;
				}
			}

			return false;
		}
	}

	return false;
};
