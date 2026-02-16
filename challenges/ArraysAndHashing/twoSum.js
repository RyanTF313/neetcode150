const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const secondNum = target - nums[i];
    const j = nums.indexOf(secondNum);

    if (j !== -1 && j !== i) {
      return [i, j].sort();
    }
  }
};
