const topKFrequent = (nums, k) => {
  const freq = new Map();
  for (const n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [num, count] of freq.entries()) {
    buckets[count].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
};
