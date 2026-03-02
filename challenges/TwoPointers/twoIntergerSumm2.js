const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    const secondNum = target - numbers[i];
    const j = numbers.indexOf(secondNum);

    if (j !== -1 && j !== i) {
      return [i + 1, j + 1];
    }
  }
};
