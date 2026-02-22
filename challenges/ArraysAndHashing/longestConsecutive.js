const longestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    // Don't start counting if it's not the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
};
