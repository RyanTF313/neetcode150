const trap = (height) => {
  let leftIdx = 0;
  let rightIdx = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;

  while (leftIdx < rightIdx) {
    if (height[leftIdx] < height[rightIdx]) {
      if (height[leftIdx] >= leftMax) {
        leftMax = height[leftIdx];
      } else {
        totalWater += leftMax - height[leftIdx];
      }
      leftIdx++;
    } else {
      if (height[rightIdx] >= rightMax) {
        rightMax = height[rightIdx];
      } else {
        totalWater += rightMax - height[rightIdx];
      }
      rightIdx--;
    }
  }

  return totalWater;
};
