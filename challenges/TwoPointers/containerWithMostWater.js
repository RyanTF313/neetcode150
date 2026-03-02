const maxArea = (heights) => {
  let leftIdx = 0;
  let rightIdx = heights.length - 1;
  let tallest = 0;

  while (leftIdx < rightIdx) {
    const height = Math.min(heights[leftIdx], heights[rightIdx]);
    const width = rightIdx - leftIdx;
    const area = height * width;

    tallest = Math.max(tallest, area);

    if (heights[leftIdx] < heights[rightIdx]) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }

  return tallest;
};
