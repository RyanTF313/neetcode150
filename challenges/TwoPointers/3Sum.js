const threeSum = (nums) => {
  const arr = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let leftIdx = i + 1;
    let rightIdx = nums.length - 1;

    while (leftIdx < rightIdx) {
      const sum = nums[i] + nums[leftIdx] + nums[rightIdx];

      if (sum === 0) {
        arr.push([nums[i], nums[leftIdx], nums[rightIdx]]);

        while (leftIdx < rightIdx && nums[leftIdx] === nums[leftIdx + 1])
          leftIdx++;
        while (leftIdx < rightIdx && nums[rightIdx] === nums[rightIdx - 1])
          rightIdx--;

        leftIdx++;
        rightIdx--;
      } else if (sum < 0) {
        leftIdx++;
      } else {
        rightIdx--;
      }
    }
  }

  return arr;
};
