const hasDuplicate = (nums) => {
  const uniques = new Set();
  const duplicates = [];

  for (let number of nums) {
    if (uniques.has(number)) {
      duplicates.push(number);
    } else {
      uniques.add(number);
    }
  }
  return !!duplicates.length;
};
