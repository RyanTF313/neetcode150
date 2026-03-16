const largestRectangleInHistogram = (heights) => {
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    const currentHeight = i === heights.length ? 0 : heights[i];

    while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
      const topIndex = stack.pop();
      const height = heights[topIndex];
      const leftBoundary = stack.length ? stack[stack.length - 1] : -1;
      const width = i - leftBoundary - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
};
