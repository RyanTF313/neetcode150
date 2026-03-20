const maxSlidingWindow = (nums, k) => {
  if (k <= 0 || nums.length === 0) return [];

  const result = [];
  const store = [];

  for (let i = 0; i < nums.length; i++) {
    while (store.length && store[0] <= i - k) {
      store.shift();
    }

    while (store.length && nums[store[store.length - 1]] <= nums[i]) {
      store.pop();
    }

    store.push(i);

    if (i >= k - 1) {
      result.push(nums[store[0]]);
    }
  }

  return result;
};
