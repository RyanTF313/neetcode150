const maxSlidingWindow = (nums, k) => {
  if (k <= 0 || nums.length === 0) return [];

  const result = [];
  const store = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove indices out of current window
    while (store.length && store[0] <= i - k) {
      store.shift();
    }

    // Maintain decreasing order in store
    while (store.length && nums[store[store.length - 1]] <= nums[i]) {
      store.pop();
    }

    store.push(i);

    // Record max once first window is formed
    if (i >= k - 1) {
      result.push(nums[store[0]]);
    }
  }

  return result;
};
