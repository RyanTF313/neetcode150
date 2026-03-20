const minEatingSpeed = (piles, h) => {
	let left = 1;
	let right = Math.max(...piles);
	let answer = right;

	while (left <= right) {
		const speed = Math.floor((left + right) / 2);
		let totalHours = 0;

		for (const pile of piles) {
			totalHours += Math.ceil(pile / speed);
		}

		if (totalHours <= h) {
			answer = speed;
			right = speed - 1;
		} else {
			left = speed + 1;
		}
	}

	return answer;
};
